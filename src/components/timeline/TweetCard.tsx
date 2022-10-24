import { NextPage } from "next"
import { ProfileIcon } from "../icon/ProfileIcon"
import styled from '@emotion/styled'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { dummyTweetType } from "../../models/dummydata";
import { ReactNode, useState } from "react";
import { TweetType } from "../../models/TweetModel";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { IconNumber } from "../icon/IconNumber";
import { createPortal } from "react-dom";
import CheckModal from "../modal/CheckModal";

interface Props {
  children: ReactNode;
}

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  border-bottom: solid thin #daeeee;
  display: flex;
  :hover{
    background-color: #efefef;
  }
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

const ModalPortal: NextPage<Props> = ({ children }: Props) => {
  const target = document.getElementById('modal');
  return createPortal(children, target!);
};

export const TweetCard : NextPage<{tweet: TweetType}> = ({tweet}) => {
  const router = useRouter()
  const [retweet ,setRetweet] = useState(tweet.retweet)
  const [isRetweet ,setIsRetweet] = useState(false)
  const [like ,setLike] = useState(tweet.like)
  const [isLike ,setIsLike] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  
  const clickRetweet = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation()
    setRetweet(isRetweet? retweet -1 : retweet +1)
    setIsRetweet(!isRetweet)
  }

  const clickLike = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation()
    setLike(isLike? like -1 : like +1)
    setIsLike(!isLike)
  }

  const routeHandler = () => {
    router.push(`/${tweet._id}`)
  }

const DeleteHandler = async(e: React.MouseEvent<HTMLButtonElement>) => { 
    e.stopPropagation()
    const tweet1 = {
        _id: tweet._id
    }
    try {
      await axios.delete("/api/test/tweet",{data: tweet1})
      router.reload()
    } catch(err) {
      console.log(err)
    }
  }



  return (
    <StyledDiv id='modal' onClick={routeHandler}>
      <ProfileIcon />
      <StyledDivRight>
        <StyledDivTop >
          <StyledSpanName>名前</StyledSpanName>
          <StyledSpanTime>時間</StyledSpanTime>
          <IconButton
            aria-label="delete"
            sx={{margin: "auto 0px auto auto",}}
            onClick={(e) => {
              e.stopPropagation()
              setModalOpen(true)
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
          {modalOpen && (
            <ModalPortal>
              <CheckModal
              handleCloseClick={(e) => {
                e.stopPropagation()
                setModalOpen(false)}}
                DeleteHandler={DeleteHandler}
              />
            </ModalPortal>
          )}
        </StyledDivTop>
        <StyledSpanTweet>
          {tweet.text}
        </StyledSpanTweet>
        <div style ={{display : "flex", alignItems: "center", width: "20%"}}>
          <IconNumber Icon={ChatBubbleOutlineIcon} number={tweet.reply} />
          <IconNumber Icon={AutorenewIcon} number={retweet} stateFunction={clickRetweet}/>
          <IconNumber Icon={FavoriteBorderIcon} number={like} stateFunction={clickLike} />
        </div>
      </StyledDivRight>
    </StyledDiv>
  )
}