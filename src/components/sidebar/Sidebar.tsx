import { NextPage } from "next"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import { SidebarIcon } from './SidebarIcon';

import styled from '@emotion/styled'
import Image from "next/image";

const StyledDiv = styled("div")({
  width: "25%",
  height: "100%",
//  backgroundColor: "gray",
})

const StyledItem = styled("div")({
  width: "fit-content",
  paddingTop: "10px",
  margin: "20px auto 0 auto",
  "@media (max-width: 1200px)": {
    margin: "20px auto 10px auto"
  },
})

const Sidebar: NextPage = () => {
  return (
    <StyledDiv >
      <StyledItem>
        <Image  src="/2021 Twitter logo - blue.png"  width="25" height="25" objectFit="cover"/>
      <SidebarIcon Icon={HomeIcon} title="ホーム"/>
      <SidebarIcon Icon={SearchIcon} title="話題を検索"/>
      <SidebarIcon Icon={NotificationsNoneIcon} title="通知"/>
      <SidebarIcon Icon={MailOutlineIcon} title="メッセージ"/>
      <SidebarIcon Icon={BookmarkBorderIcon} title="ブックマーク"/>
      <SidebarIcon Icon={ListAltIcon} title="リスト"/>
      <SidebarIcon Icon={PermIdentityIcon} title="プロフィール"/>
      <SidebarIcon Icon={MoreHorizIcon} title="もっと見る"/>
      </StyledItem>
     </StyledDiv>
  )

}


export default Sidebar