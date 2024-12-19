import dbConnect from "@/lib/connectdb";
import UserModel, { IUser } from "@/model/user";
import { chat } from "./core";
import { Content, Part } from "@google/generative-ai";
import { msgProps } from "@/app/contact/Messenger/provider";

const date = new Date();

var cacheEmails: string[] = [];
var cacheParts: { [key: string]: Part[] } = {};
// const cacheIds: { [key: string]: ObjectId } = {};

export async function POST(request: Request) {
  const { query, name, email } = await request.json();
  if (!query || !name || !email)
    return Response.json({ sender: "admin", msg: null });
  try {
    await dbConnect();
    const contents: Content[] = [];
    // isUserExists
    let user = await UserModel.findOne({ email });
    //  not -> create user
    // const parts: { text: string }[] = [];
    if (!user) {
      // console.log("Creating new user");
      const newUser = new UserModel<IUser>({ name, email, chats: [] });
      await newUser.save();
      user = newUser;
    } else {
      // console.log("extracting chats");
      // console.log(JSON.stringify(user.chats));
      user.chats.forEach((chat: msgProps) => {
        if (chat.sender === "user") {
          contents.push({
            role: "user",
            parts: [
              {
                text: `input:${JSON.stringify(chat.msg) ?? chat.msg?.toString()}`,
              },
            ],
          });
        }
        if (chat.sender === "admin") {
          contents.push({
            role: "model",
            parts: [{ text: `output:${chat.msg?.toString()}` }],
          });
        }
      });
    }
    if (user) {
      user.chats.push(
        { sender: "user", msg: query }, // User's message
      );
      await user.save(); // Save the updated chats to the database
    }
    contents.push({
      role: "user",
      parts: [{ text: `input:${name}:${query}` }],
    });
    // console.log({ contents: JSON.stringify(contents) });
    // const res = await chat(parts, `${name}:${query}`);
    const res = await chat(contents);
    if (user) {
      user.chats.push(
        { sender: "admin", msg: JSON.stringify(res) }, // User's message
      );
      await user.save(); // Save the updated chats to the database
    }
    // console.log({ sender: "admin", msg: res.reply, type: res.type });
    return Response.json({ sender: "admin", msg: res.reply, type: res.type });
  } catch (error) {
    const e = error as { _message?: string };
    console.log("something went wrong", e?._message);
    return Response.json({ sender: "admin", msg: null });
  }
}
