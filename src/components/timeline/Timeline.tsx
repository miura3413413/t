import { NextPage } from "next"
import styled from '@emotion/styled'
import { TweetSpace } from "./TweetSpace";
import { Tweet } from "../Tweet";
import { dummyTweets } from "../../models/dummydata"
import axios from "axios";
import { useEffect, useState } from "react";
import { TweetType } from "../../models/TweetModel";
const StyledDiv = styled.div`
  width: 100%;
  height: 90%;
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  border-bottom: none;
  border-top: none;
  @media (max-width: 1200px) {
  //  width: 55%;
  };
  @media(max-width: 720px) {
   // width: 80%;
  };
`


export const Timeline: NextPage = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  useEffect(() => {
    const fetchTweet = async() => {
      const res = await axios.get("/api/test/tweet")
      setTweets(res.data)
      return tweets
    }
    fetchTweet()
  }, []);
  return (
    <StyledDiv >
      <TweetSpace />
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet._id}/>
      ))}
      {/* <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet /> */}
    </StyledDiv>
  )

}

