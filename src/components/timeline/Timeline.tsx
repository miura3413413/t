import { NextPage } from "next"


import styled from '@emotion/styled'
import TweetSpace from "./TweetSpace";
import Tweet from "../Tweet";

const StyledDiv = styled.div`
  width: 40%;
  height: 100%;
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  @media (max-width: 1200px) {
    width: 55%;
  };
  @media(max-width: 720px) {
    width: 90%;
  };
`

const StyledHome = styled.h1`
  margin: 20px;
  font-size: 20px;
`

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
      <Tweet />
    </StyledDiv>
  )

}


export default Timeline