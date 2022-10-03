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
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Tweet = models.Tweet || model("Tweet", TweetSchema)

export default Tweet;