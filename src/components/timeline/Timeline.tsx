import { NextPage } from "next"
import styled from '@emotion/styled'
import { TweetSpace } from "./TweetSpace";
import { TweetCard } from "./TweetCard";
import { dummyTweets } from "../../models/dummydata"
import axios from "axios";
import { useEffect, useState } from "react";
import { TweetType } from "../../models/TweetModel";
import { Props } from "../../pages";
const StyledDiv = styled.div`
  width: 100%;
  height: 90%;

`

export const Timeline: NextPage<Props> = ({ tweets }) => {
  console.log(tweets[0]._id)
  // const [tweets, setTweets] = useState(tweets);
  // console.log(tweets)
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
      {tweets.map((tweet) => (
        
        <TweetCard tweet={tweet} key={tweet._id}/>
      ))}
      {/* {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet._id}/>
      ))} */}
    </StyledDiv>
  )

}

