import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema)

export default User;

export interface UserType {
  _id: string
  name: string
  password: string
  email: number
  createdAt: string
  updatedAt: string
  __v: number
}