import { NextPage } from "next"


import styled from '@emotion/styled'
import TweetSpace from "./TweetSpace";
import Tweet from "../Tweet";

const StyledDiv = styled("div")({
  width: "40%",
  height: "100%",
//  backgroundColor: "red",
})

const Timeline: NextPage = () => {
  return (
    <StyledDiv >
      <h1>HOME</h1>
      <TweetSpace />
      <Tweet />
    </StyledDiv>
  )

}


export default Timeline