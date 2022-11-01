import { NextPage } from "next"
import styled from '@emotion/styled'
import { TweetSpace } from "./TweetSpace";
import { TweetCard } from "./TweetCard";
import { dummyTweets } from "../../models/dummydata"
import { useEffect, useState } from "react";
import { TweetType } from "../../models/TweetModel";
import { usePost } from "../../../util/fetchFunction";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`

export const Timeline: NextPage = () => {
  const { data } = usePost();
  const [posts, setPosts] = useState<TweetType[]| undefined>([])
  useEffect(()=>{
    setPosts(data?.tweets?.reverse())
  },[data])
  return (
    <StyledDiv>
      <TweetSpace />
      {posts?.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet._id}/>
      ))}
    </StyledDiv>
  )
}

