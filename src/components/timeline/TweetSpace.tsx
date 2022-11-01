import { NextPage } from "next"
import { ProfileIcon } from "../icon/ProfileIcon" 
import styled from '@emotion/styled'
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import TextareaAutosize from 'react-textarea-autosize';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { IconButton } from "@mui/material";
import { useSession } from "next-auth/react";

const StyledDiv = styled.div`
  padding-right: 30px;
  border-bottom: solid thin #daeeee;

`

const StyledDivTop = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
`

// const StyledTextarea = styled.textarea`
//   width: 75%;
//   height: 50px;
//   border-width: 0 0 1px 0;
//   border-color: #daeeee;
//   outline: none;
//   padding-left: 10px;
//   font-size: 20px;
//   resize: none;
// `

const StyledDivBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px auto 20px 80px;
  justify-content: center;
`


const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 40px;
  background-color: #4ebefa;
  color: white;
  font-weight: bold;
  border: none;
  :hover{background-color: #358de0;}
`


const StyledDivButton = styled.div`
  width:100%;
  margin-right: 15px;
  text-align: right;
`





export const TweetSpace: NextPage = () => {
  const text = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const { data: session } = useSession()
  const addTweetHandler = async() => {
     const tweet = {
      text: text.current?.value,
      userId: session?.user._id
    }
    try {
      await axios.post("/api/test/tweet", tweet)
      router.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <StyledDiv>
      <StyledDivTop>
        <ProfileIcon />
        <TextareaAutosize
          style={{
            width: "75%",
            paddingTop: "10px",
            borderWidth: "0 0 1px 0",
            borderColor: "#daeeee",
            outline: "none",
            fontSize: "20px",
            resize: "none",
          }}
          placeholder="今どうしてる？" 
          ref={text}/>
      </StyledDivTop>
      <StyledDivBottom>
        <IconButton size="medium" color="info">
          <PermMediaIcon style={{fontSize: "20px", color: "#93d5ff"}}/>
        </IconButton>
        <IconButton size="medium" color="info">
          <GifBoxIcon style={{fontSize: "20px", color: "#93d5ff"}}/>
        </IconButton>
        <IconButton size="medium" color="info">
          <PollIcon style={{fontSize: "20px", color: "#93d5ff"}}/>
        </IconButton>
        <IconButton size="medium" color="info">
          <SentimentSatisfiedAltIcon style={{fontSize: "20px", color: "#93d5ff"}}/>
        </IconButton>
        <IconButton size="medium" color="info">
          <PendingActionsIcon style={{fontSize: "20px", color: "#93d5ff"}}/>
        </IconButton>
        <StyledDivButton>
          <StyledButton onClick={ addTweetHandler }>ツイートする</StyledButton>
        </StyledDivButton>
      </StyledDivBottom>
    </StyledDiv>


  )
}