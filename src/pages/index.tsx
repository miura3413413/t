import type { NextPage } from 'next'
import Image from 'next/image'
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import React, { ReactNode, useState } from 'react';
import { LoginModal } from '../components/modal/LoginModal';

interface ButtonProps {
  color?: string
  bgColor?: string
  hoverBgColor: string
}

interface Props {
  children: ReactNode;
}

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
`
const StyledDivLeft = styled.div`
  width: auto;
  flex:1;
  position: relative;
  @media(max-width: 1000px) {
    display: none;

  };
`


const StyledDivImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledDivRight = styled.div`
  height: 100vh;
  width: 900px;
  @media(max-width: 1000px) {
    width: 100%;


  };
` 

const StyledDivMain = styled.div`
  height: 750px;
  padding: 50px 0 0 30px;
  @media(max-width: 1000px) {
    padding-top: 30px;
  };
`

const StyledH1 = styled.h1`
  font-size: 60px;
  @media(max-width: 1000px) {
    margin: 10px 0;
  };
`



const StyledDivButton = styled.div`
  display:flex;
  flex-flow: column;
`

export const StyledButton = styled.button<ButtonProps>`
  width: 300px;
  height: 40px;
  background-color: ${({bgColor}) => (bgColor || "white")} ;
  color: ${({color}) => (color || "black")};
  font-weight: bold;
  border: 1px solid #e0e0e0;
  border-radius: 40px;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;
  :hover{
    background-color: ${({hoverBgColor}) => hoverBgColor};
  }
`

const StyledP = styled.p`
  margin: 5px;
  padding-left: 130px;
  font-weight: bold;
  font-size: smaller;
`

const StyledH4 = styled.h4`
  margin: 0;
  padding: 100px 0 10px 0;

`


const StyledDivBottomImage = styled.div`
  width: 100%;
  height: 152px;
  position: relative;
  
  @media(min-width: 1000px) {
    display: none;
  };

`
const ModalPortal: NextPage<Props> = ({ children }: Props) => {
  const target = document.getElementById('modal');
  return createPortal(children, target!);
};

export const Login: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledDiv >
      <div id='modal'></div>
      <StyledDivLeft>
        <Image src="/lohp_1302x955.png"  layout="fill"  objectFit="cover"/>
        <StyledDivImage>
          <Image
            src="/2021 Twitter logo - white.png"
            width={400}
            height={400}
            objectFit="contain"
          />
        </StyledDivImage>
      </StyledDivLeft>
      <StyledDivRight>
        <StyledDivMain>
          <Image src="/2021 Twitter logo - blue.png" width={40} height={40} objectFit="contain"/>
          <StyledH1>すべての話題が、ここに。</StyledH1>
          <h2>Twitterをはじめよう</h2>
          <StyledDivButton>
            <StyledButton hoverBgColor='#eef2fc'>Googleで登録</StyledButton>
            <StyledButton hoverBgColor='#e2e2e2'>Appleのアカウントで登録</StyledButton>
          </StyledDivButton>
          <StyledP>または</StyledP>
          <StyledButton bgColor='#4aa6e7' color='white' hoverBgColor='#308ce3'>電話番号またはメールアドレスで登録</StyledButton>
          <StyledH4>アカウントをお持ちの場合</StyledH4>
          <StyledButton color='#1a82d7' hoverBgColor='#eaf2fe' onClick={() => setModalOpen(true)}>ログイン</StyledButton>
          {modalOpen && (
            <ModalPortal>
              <LoginModal  handleCloseClick={() => setModalOpen(false)}/>
            </ModalPortal>
          )}
          
        </StyledDivMain>
        <StyledDivBottomImage>
          <Image src="/lohp_1302x955.png"  layout="fill"  objectFit="cover"/>
        </StyledDivBottomImage>
      </StyledDivRight>
    </StyledDiv>
    
  )

}

export default Login