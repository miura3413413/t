import { NextPage } from "next"
import ProfileIcon from "../ProfileIcon" 
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

import styled from '@emotion/styled'


const StyledDiv = styled("div")({
  marginRight: "30px",
})

const StyledDivTop = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  height: "100%",
  
})

const StyledTextarea = styled("textarea")({
  width: "300px",
  height: "50px",
  borderWidth: "0 0 1px 0 ",
  borderColor: "#daeeee",
  outline: "none",
  paddingLeft: "10px",
  fontSize: "20px",
  clos:"6"

})

const StyledDivBottom = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "20px auto auto 80px",
  
})


const StyledButton = styled("button")({
  width: "120px",
  height: "40px",
  borderRadius: "40px",
  backgroundColor: "#4ebefa",
  color: "white",
  fontWeight: "bold",
  border: "none",
  ":hover":{backgroundColor: "#358de0",}
})


const StyledDivButton = styled("div")({
  width:"100%",
  marginRight: "15px",
  textAlign: "right"
})





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