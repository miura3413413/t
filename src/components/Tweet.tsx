import { NextPage } from "next"
import ProfileIcon from "./ProfileIcon"

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Tweet : NextPage = () => {
  return (
  <div>
    <ProfileIcon />
    <span>名前</span>
    <span>時間</span>
    <span>ツイート</span>
    <ChatBubbleOutlineIcon />
    <AutorenewIcon />
    <FavoriteBorderIcon />

    </div>
  )
}
export default Tweet
