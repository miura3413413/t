import { NextPage } from "next"
import ProfileIcon from "./ProfileIcon"
import styled from '@emotion/styled'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const StyledDiv = styled.div`
  width: 100%;
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  display: flex;
`

const StyledDivRight = styled.div`
  width: 80%;
  margin: 0;
`

const StyledDivTop = styled.div`
  margin-top: 15px;
  display: flex;
`

const StyledSpanName = styled.p`
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  margin: 0;
`

const StyledSpanTime = styled.p`
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  margin: 0;
`

const StyledSpanTweet = styled.p`
  border: solid;
  border-width: thin;
  border-color: #daeeee;
  margin: 0;
`

const Tweet : NextPage = () => {
  return (
  <StyledDiv>
    <ProfileIcon />
    <StyledDivRight>
      <StyledDivTop >
        <StyledSpanName>名前</StyledSpanName>
        <StyledSpanTime>時間</StyledSpanTime>
        <MoreHorizIcon />
      </StyledDivTop>
      <StyledSpanTweet>あqqqqqqqqqqqqqqqqqqqqq</StyledSpanTweet>
      <div>
        <ChatBubbleOutlineIcon />
        <AutorenewIcon />
        <FavoriteBorderIcon />
      </div>
    </StyledDivRight>
    </StyledDiv>
  )
}
export default Tweet
