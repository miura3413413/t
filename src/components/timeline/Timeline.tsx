import { NextPage } from "next"
import styled from '@emotion/styled'
import { TweetSpace } from "./TweetSpace";
import { Tweet } from "./Tweet";
import { dummyTweets } from "../../models/dummydata"
import axios from "axios";
import { useEffect, useState } from "react";
import { TweetType } from "../../models/TweetModel";
const StyledDiv = styled.div`
  width: 100%;
  height: 90%;
  /* border: solid;
  border-width: thin;
  border-color: #daeeee;
  border-bottom: none;
  border-top: none; */

`

export const Timeline: NextPage = () => {
  
  // const [tweets, setTweets] = useState<TweetType[]>([]);
  // useEffect(() => {
  //   const fetchTweet = async() => {
  //     const res = await axios.get("/api/test/tweet")
  //     setTweets(res.data)
  //     return tweets
  //   }
  //   fetchTweet()
  // }, []);
  return (
    <StyledDiv>
      <TweetSpace />
      {dummyTweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet._id}/>
      ))}
      {/* {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet._id}/>
      ))} */}
    </StyledDiv>
  )

}

