import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "../../../../util/connect"
import Tweet from "../../../models/TweetModel"

export default async function addTweet(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo()
  if (req.method === "POST") {
    try {
      const newTweet = await new Tweet(req.body)
      const tweet = await newTweet.save()
      return res.status(200).json(tweet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  } else if (req.method === "get") {
    try {
      const tweet = await new Tweet(req.body)
      return res.status(200).json(tweet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }


  }
}