import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../util/connect"
import User from "../../../models/UserModel"

export default async function addUser(req: NextApiRequest, res: NextApiResponse) {

  await db.connectMongo()
  if (req.method === "GET") {
    try {

      const newUser = await User.findById(req.query._id)
      return res.status(200).json(newUser);

    } catch (error) {

      res.status(500).json({ error });
    }
  }
  else if (req.method === "POST") {
    try {
      const newTweet = await new User(req.body)
      console.log(newTweet)
      const tweet = await newTweet.save()
      return res.status(200).json(tweet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
  await db.disconnectMongo()
}
