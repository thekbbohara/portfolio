import dbConnect from "@/lib/connectdb";
import UserModel, { IUser } from "@/model/user";
import { type ObjectId } from "mongoose";

export async function GET() {
  await dbConnect();
  const users = await UserModel.find()
  const emailExists = await UserModel.exists({ email: "kb@gmail.com" }) // check in db
  if (!emailExists) {
    const user = new UserModel({ name: "kb", email: "kb@gmail.com" })

    await user.save()
  } else {
    const user: IUser | null = await UserModel.findById(emailExists._id)
    const chats = user?.chats
    // return Response.json({ chats })
  }
  return Response.json({ users, emailExists })
}
