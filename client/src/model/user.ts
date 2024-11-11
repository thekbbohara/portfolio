import { Schema, model, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  chats: { text: string }[];
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  chats: { type: [{ text: String }] }
}, {
  timestamps: true
});

const UserModel = models.UserModel || model<IUser>('UserModel', userSchema)
export default UserModel
