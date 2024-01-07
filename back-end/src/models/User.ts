import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);