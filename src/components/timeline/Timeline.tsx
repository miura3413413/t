import { NextPage } from "next"
import styled from '@emotion/styled'
import { TweetSpace } from "./TweetSpace";
import { Tweet } from "../Tweet";

const StyledDiv = styled.div`
  width: 100%;
  height: 90%;
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  @media (max-width: 1200px) {
  //  width: 55%;
  };
  @media(max-width: 720px) {
   // width: 80%;
  };
`


export const Timeline: NextPage = () => {
  return (
    <StyledDiv >
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

