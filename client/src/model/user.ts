import { msgProps } from "@/app/contact/Messenger/provider";
import { ObjectId, Schema, model, models } from "mongoose";

export interface IUser {
  _id?: any;
  name: string;
  email: string;
  chats: msgProps[];
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    chats: {
      type: [
        {
          sender: { type: String, enum: ["user", "admin"], required: true },
          msg: { type: String, default: null },
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = models.UserModel || model<IUser>("UserModel", userSchema);
export default UserModel;
