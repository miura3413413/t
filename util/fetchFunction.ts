import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TweetType } from "../src/models/TweetModel";
import { UserType } from "../src/models/UserModel";

interface Props {
  tweets: TweetType[],
  user?: UserType
}

export const getPost = async (id?: string | string[]): Promise<Props> => {
  const resTweet = await axios.get("http://localhost:3000/api/test/tweet");
  try {
    const resUser = await axios.get("http://localhost:3000/api/test/user", { params: { _id: id } });
    const data: { tweets: TweetType[], user: UserType } = {
      tweets: resTweet.data,
      user: resUser.data,
    }
    return data
  } catch {
    const data: { tweets: TweetType[] } = {
      tweets: resTweet.data,
    }
    return data
  }
}


export const usePost = (id?: string | string[]) => {
  return useQuery(['post', id], () => getPost(id));
}