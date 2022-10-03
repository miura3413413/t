import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String || Number
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema)

export default User;