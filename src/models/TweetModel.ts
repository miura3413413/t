import { Schema, model, models, Types, Date } from 'mongoose';

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
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
  userId: string
  reply: number
  retweet: number
  like: number
  createdAt: string
  updatedAt: string
  __v: number
}
