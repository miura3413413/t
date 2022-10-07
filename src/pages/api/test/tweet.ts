import { request } from "http"
import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "../../../../util/connect"
import { Tweet } from "../../../models/TweetModel"

export default async function adsdTweet(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo()
  if (req.method === "POST") {
    try {
      const newTweet = await new Tweet(req.body)
      console.log(newTweet)
      const tweet = await newTweet.save()
      return res.status(200).json(tweet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  } else if (req.method === "GET") {
    try {
      const tweet = await Tweet.find()
      return res.status(200).json(tweet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  } else if (req.method === "DELETE") {
    try {
      await Tweet.deleteOne(req.body)
      return res.status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}