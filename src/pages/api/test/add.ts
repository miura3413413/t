import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "../../../../util/connect"
import Post from "../../../models/TweetModel"

export default async function addTest(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo()
  if (req.method === "POST") {
    try {
      const newPost = await new Post(req.body)
      const post = await newPost.save()
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}