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

export const Tweet = models.Tweet || model("Tweet", TweetSchema)

export interface TweetType {
  _id: string
  text: string
  reply: number
  retweet: number
  like: number
}
//export default Tweet;