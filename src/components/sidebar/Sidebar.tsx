import { NextPage } from "next"
import { IconText } from '../icon/IconText';
import styled from '@emotion/styled'
import Image from "next/image";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from "@mui/material";
import Link from "next/link";

const StyledDiv = styled.div`
  width: 30%;
  height: 100vh;
  position: sticky;
  top: 0;
  justify-content: center;
  border-right: solid thin #daeeee;
  @media (max-width: 1200px) {
    width:13%;
    padding-left:28px;
  };
  @media (max-width: 750px) {
    padding-left:10px;
  };
  @media(max-width: 520px) {
    width: 13%;
    margin-left: 0px;
    padding: 0;
  }
`

const StyledItem = styled.div`
  width: fit-content;
  height: 100%;
  padding-top: 10px;
  margin: 10px 40px 0 auto;
`

export const Sidebar: NextPage = () => {
  
  return (
    <StyledDiv >
      <StyledItem>
        <Link href={"/"}>
          <IconButton size="large" color="info" sx={{margin:"4px"}}>
            <Image src="/2021 Twitter logo - blue.png" width="25" height="25" objectFit="cover" />
          </IconButton>
        </Link>
        <IconText Icon={HomeIcon} text="ホーム" destination="/"/>
        <IconText Icon={SearchIcon} text="話題を検索" destination="/"/>
        <IconText Icon={NotificationsNoneIcon} text="通知" destination="/"/>
        <IconText Icon={MailOutlineIcon} text="メッセージ" destination="/"/>
        <IconText Icon={BookmarkBorderIcon} text="ブックマーク" destination="/"/>
        <IconText Icon={ListAltIcon} text="リスト" destination="/"/>
        <IconText Icon={PermIdentityIcon} text="プロフィール"  destination="/id"/>
        <IconText Icon={MoreHorizIcon} text="もっと見る"  destination=""/>
      </StyledItem>
    </StyledDiv>
  )

}


