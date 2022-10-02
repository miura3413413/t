import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "../../../../util/connect"
import Post from "../../../models/TweetModel"

export default async function addTest(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo()
    const newPost = await new Post({
      text: req.body.text,
      like: req.body.like,
    })
    const post = await newPost.save()
    return res.json({ post });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}