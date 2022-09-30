import { NextPage } from "next"
import ProfileIcon from "../ProfileIcon" 
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const TweetSpace: NextPage = () => {
  return(
    <div style={{ 
//      backgroundColor: "blue"
      }}>
      <ProfileIcon />
      <input type="text" placeholder="今何しているの？"/>
      <PermMediaIcon />
      <GifBoxIcon/>
      <PollIcon />
      <SentimentSatisfiedAltIcon />
      <PendingActionsIcon />
      <button>ツイートする</button>
    </div>
  )
}


export default TweetSpace