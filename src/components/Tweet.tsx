import { NextPage } from "next"
import ProfileIcon from "./ProfileIcon"
import styled from '@emotion/styled'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconText } from "./IconText";

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
  margin: 15px 0px 0 0;
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
        <MoreHorizIcon sx={{margin: "auto 20px auto auto"}}/>
      </StyledDivTop>
      <StyledSpanTweet>あqqqqqqqqqqqqqqqqqqqqq</StyledSpanTweet>
      <div style ={{display : "flex", alignItems: "center", width: "20%"}}>
        <IconText Icon={ChatBubbleOutlineIcon} text={100}/>
        <IconText Icon={AutorenewIcon} text={100}/>
        <IconText Icon={FavoriteBorderIcon} text={100}/>
      </div>
    </StyledDivRight>
    </StyledDiv>
  )
}
export default Tweet
