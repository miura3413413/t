import { NextPage } from "next"


import styled from '@emotion/styled'
import TweetSpace from "./TweetSpace";
import Tweet from "../Tweet";

const StyledDiv = styled("div")({
  width: "40%",
  height: "100%",
  border: "solid",
  borderWidth: "thin",
  borderColor: "#daeeee",
//  backgroundColor: "red",
  "@media (max-width: 1200px)": {
    width: "55%",
    //marginRight: "30px"
    
  },
  "@media(max-width: 720px)":{
    width: "90%"
  }
})

const StyledHome = styled("h1")({
  margin: "20px",
  fontSize: "20px"
})

const Timeline: NextPage = () => {
  return (
    <StyledDiv >
      <StyledHome>ホーム</StyledHome>
      <TweetSpace />
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
      <Tweet />
      sition: "fixed,
        top: "0", 
          left:"10px",
      <Tweet />
    </StyledDiv>
  )

}


export default Timeline