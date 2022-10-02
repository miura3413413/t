import { NextPage } from "next"
import ProfileIcon from "../ProfileIcon" 
import PermMediaIcon from '@mui/icons-material/PermMedia';import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

import styled from '@emotion/styled'


const StyledDiv = styled.div`
  margin-right: 30px;
`

const StyledDivTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
`

const StyledTextarea = styled.textarea`
  width: 75%;
  height: 50px;
  border-width: 0 0 1px 0;
  border-color: #daeeee;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
`

const StyledDivBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px auto 20px 80px;
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





const TweetSpace: NextPage = () => {
  return(
    <StyledDiv>
      <StyledDivTop>
        <ProfileIcon />
        <StyledTextarea  placeholder="今どうしてる？" />
      </StyledDivTop>
      <StyledDivBottom>
        <PermMediaIcon />
        <GifBoxIcon/>
        <PollIcon />
        <SentimentSatisfiedAltIcon />
        <PendingActionsIcon />
        <StyledDivButton>
          <StyledButton>ツイートする</StyledButton>
        </StyledDivButton>
      </StyledDivBottom>
    </StyledDiv>


  )
}


export default TweetSpace