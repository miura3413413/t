import { Schema, model, models } from 'mongoose';

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    reply: {
      type: Number,
      default: 0
    },
    retweet: {
      type: Number,
      default: 0
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