import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "../../../../util/connect"
import User from "../../../models/UserModel"

export default async function addUser(req: NextApiRequest, res: NextApiResponse) {

  await connectMongo()
  if (req.method === "POST") {
    try {
      const newUser = await new User({
        name: req.body.name,
      })
      const user = await newUser.save()
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

