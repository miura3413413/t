import { NextPage } from "next"
import { ProfileIcon } from "./icon/ProfileIcon"
import { IconText } from "./icon/IconText";
import styled from '@emotion/styled'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {  useSelector } from "react-redux";
import { LikeState, ReplyState, RetweetState } from "../state/store";
import { changeLike } from "../state/likeSlice";
import { changeReply } from "../state/replySlice";
import { changeretweet } from "../state/retweetSlice";



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

export const Tweet : NextPage = () => {
  const like  = useSelector((state: LikeState) => state.like.value)
  const reply  = useSelector((state: ReplyState) => state.reply.value)
  const retweet  = useSelector((state: RetweetState) => state.retweet.value)

  return (
  <StyledDiv>
    <ProfileIcon />
    <StyledDivRight>
      <StyledDivTop >
        <StyledSpanName>名前</StyledSpanName>
        <StyledSpanTime>時間</StyledSpanTime>
        <MoreHorizIcon sx={{margin: "auto 5px auto auto"}}/>
      </StyledDivTop>
      <StyledSpanTweet>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nam, corporis dolor iusto ex voluptatem earum,
          quae non qui quam tempore totam recusandae?
           At quo accusamus ipsa maxime quaerat. Facilis, odit.
      </StyledSpanTweet>
      <div style ={{display : "flex", alignItems: "center", width: "20%"}}>
        <IconText Icon={ChatBubbleOutlineIcon} text={retweet} weight="lighter" stateFunction={changeretweet()}/>
        <IconText Icon={AutorenewIcon} text={reply} weight="lighter" stateFunction={changeReply()}/>
        <IconText Icon={FavoriteBorderIcon} text={like} weight="lighter" stateFunction={changeLike()}/>
      </div>
    </StyledDivRight>
    </StyledDiv>
  )
}