import { Schema, model, models } from 'mongoose';

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    like: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Post = models.Post || model("Post", TweetSchema)

export default Post;