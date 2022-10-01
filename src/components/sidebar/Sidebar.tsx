import { NextPage } from "next"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import { IconText } from '../IconText';

import styled from '@emotion/styled'
import Image from "next/image";

const StyledDiv = styled.div`
  width: 25%;
  height: 100%;
  position: sticky;
  top: 0;
  @media (max-width: 1200px) {
    width:15%;
    margin: 0 0 0 30px;
  };
  @media(max-width: 520px) {
    width: 10%;
  }
`

const StyledItem = styled.div`
  width: fit-content;
  padding-top: 10px;
  margin: 20px auto 0 auto;
`

const Sidebar: NextPage = () => {
  return (
    <StyledDiv >
      <StyledItem>
        <Image  src="/2021 Twitter logo - blue.png"  width="25" height="25" objectFit="cover"/>
      <IconText Icon={HomeIcon} text="ホーム" display="none" />
      <IconText Icon={SearchIcon} text="話題を検索" display="none"/>
      <IconText Icon={NotificationsNoneIcon} text="通知" display="none"/>
      <IconText Icon={MailOutlineIcon} text="メッセージ" display="none"/>
      <IconText Icon={BookmarkBorderIcon} text="ブックマーク" display="none"/>
      <IconText Icon={ListAltIcon} text="リスト" display="none"/>
      <IconText Icon={PermIdentityIcon} text="プロフィール" display="none"/>
      <IconText Icon={MoreHorizIcon} text="もっと見る" display="none"/>
      </StyledItem>
     </StyledDiv>
  )

}


export default Sidebar