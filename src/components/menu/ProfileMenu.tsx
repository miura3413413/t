import { NextPage } from "next"
import styled from '@emotion/styled'
import { signOut } from "next-auth/react"

const StyledDiv = styled.div`
	position: relative;
	background: white;
  width: 280px;
  height: 150px;
  padding-top: 15px;
  top: 20px;
  margin: 0 0 0 auto;
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  -webkit-filter:drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
  -moz-filter:drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
  -ms-filter:drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
  filter:drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));

  ::before {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -105px;
  border: 15px solid transparent;
  border-top-color: #fff;
}
`
const logoutClickHandler = () => {
  signOut({ callbackUrl: "/" })
}

const StyledButton = styled.button`
  width: 100%;
  min-height: 45%;
  text-align: left;
  background-color: white;
  border: none;
  font-size: 15px;
  transition: 0.3s;
  :hover{
    background-color: #f3f4f5 ;
  }
`
export const ProfileMenu: NextPage = () => {
  return (
    <StyledDiv>
      <StyledButton>既存のアカウントを追加</StyledButton>
      <StyledButton onClick={logoutClickHandler} >ログアウト</StyledButton>
    </StyledDiv>
  )

}
export default ProfileMenu
