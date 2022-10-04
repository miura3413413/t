import { NextPage } from "next"
import { ProfileIcon } from "./icon/ProfileIcon"
import { IconText } from "./icon/IconText";
import styled from '@emotion/styled'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { dummyTweetType } from "../models/dummydata";
import { useState } from "react";



const StyledDiv = styled.div`
  width: 100%;
  height: auto;
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

const StyledSpanName = styled.span`
  margin: 0;
  font-weight: bold;
`

const StyledSpanTime = styled.span`
  margin: 0 0 0 5px;
`

const StyledSpanTweet = styled.span`
  margin-right: 20px;
  
  overflow-wrap: break-word;
`

export const Tweet : NextPage<{dummyTweet: dummyTweetType}> = ({dummyTweet}) => {
const [retweet ,setRetweet] = useState(dummyTweet.retweet)
const [isRetweet ,setIsRetweet] = useState(false)
const [like ,setLike] = useState(dummyTweet.like)
const [isLike ,setIsLike] = useState(false)
const clickRetweet = () => {
  setRetweet(isRetweet? retweet -1 : retweet +1)
  setIsRetweet(!isRetweet)
}
const clickLike = () => {
  setLike(isLike? like -1 : like +1)
  setIsLike(!isLike)
}
  return (
  <StyledDiv>
    <ProfileIcon />
    <StyledDivRight>
      <StyledDivTop >
        <StyledSpanName>名前</StyledSpanName>
        <StyledSpanTime>時間</StyledSpanTime>
        <MoreHorizIcon sx={{margin: "auto 5px auto auto"}}/>
      </StyledDivTop>
      <StyledSpanTweet>
        {dummyTweet.text}
      </StyledSpanTweet>
      <div style ={{display : "flex", alignItems: "center", width: "20%"}}>
        <IconText Icon={ChatBubbleOutlineIcon} text={dummyTweet.reply} weight="lighter" />
        <IconText Icon={AutorenewIcon} text={retweet} weight="lighter" stateFunction={clickRetweet}/>
        <IconText Icon={FavoriteBorderIcon} text={like} weight="lighter" stateFunction={clickLike}/>
      </div>
    </StyledDivRight>
    </StyledDiv>
  )
}