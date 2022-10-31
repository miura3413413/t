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
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ProfileIcon } from "../icon/ProfileIcon";
import ProfileMenu from "../menu/ProfileMenu";
import { useState } from "react";

const StyledDiv = styled.div`
  width: 30%;
  height: 100vh;
  position: sticky;
  top: 0;
  justify-content: center;
  border-right: solid thin #daeeee;
  z-index: 100;
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
  padding-top: 10px;
  margin: 10px 40px 0 auto;
`



export const Sidebar: NextPage = () => {
  const [show, setShow] = useState(false);
  const { data: session } = useSession()
  return (
    <StyledDiv>
      <StyledItem>
        <Link href={"/home"}>
          <IconButton size="large" color="info" sx={{margin:"4px"}}>
            <Image src="/2021 Twitter logo - blue.png" width="25" height="25" objectFit="cover" />
          </IconButton>
        </Link>
        <IconText Icon={HomeIcon} text="ホーム" destination="/home"/>
        <IconText Icon={SearchIcon} text="話題を検索" destination="/home"/>
        <IconText Icon={NotificationsNoneIcon} text="通知" destination="/home"/>
        <IconText Icon={MailOutlineIcon} text="メッセージ" destination="/home"/>
        <IconText Icon={BookmarkBorderIcon} text="ブックマーク" destination="/home"/>
        <IconText Icon={ListAltIcon} text="リスト" destination="/home"/>
        <IconText Icon={PermIdentityIcon} text="プロフィール"  destination={`/${session?.user._id}`}/>
        <IconText Icon={MoreHorizIcon} text="もっと見る" />
        <IconButton
          size="small"
          color="inherit"
          sx={{top: "250px"}}
          onClick={ () => setShow(!show)}
          >
          <div style={{ borderRadius: '50%', overflow: 'hidden', width: '50px', height: '50px',  margin: " 3px " }}>
            <Image  src="/default_profile_400x400_l.webp" width="50" height="50" objectFit="cover" />
          </div>
        </IconButton>
      </StyledItem>
      {show && <ProfileMenu />}
    </StyledDiv>
  )

}


