import { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../util/connect"
import connectMongo from "../../../../util/connect"
import User from "../../../models/UserModel"

export default async function addUser(req: NextApiRequest, res: NextApiResponse) {

  await db.connectMongo()
  if (req.method === "GET") {
    try {
      const newUser = await User.findById(res)
      console.log(newUser)
      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

