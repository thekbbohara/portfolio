import dbConnect from "@/lib/connectdb";
import UserModel, { IUser } from "@/model/user";
import { chat } from "./core";
type Part = {
  text: string;
};
const date = new Date();

const cacheEmails: string[] = [];
const cacheParts: { [key: string]: Part[] } = {};
// const cacheIds: { [key: string]: ObjectId } = {};

export async function POST(request: Request) {
  const { query, name, email } = await request.json();
  if (!query || !name || !email)
    return Response.json({ sender: "admin", msg: null });
  // await dbConnect();
  const res = await chat(`${name}:${query}`);
  console.log({ res });
  return Response.json({ sender: "admin", msg: res });
}
