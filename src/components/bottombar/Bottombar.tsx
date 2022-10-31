import type {  NextPage } from 'next'
import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import LoginModal from '../modal/LoginModal';

interface ButtonProps {
  color?: string
  bgColor?: string
  hoverBgColor: string
}

interface Props {
  children: ReactNode;
}

const StyledDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: #00a2ff;
  position: sticky;
  bottom: 0;
  z-index: 100;
  display: flex;
`
const StyledDivFont = styled.div`
  width: 60%;
  color: white;
  padding-top: 10px;
  text-align: center;
  @media(max-width: 700px) {
    display: none;;
  };
`
const StyledDivH2 = styled.h2`
  margin: 0;
`
const StyledDivH5 = styled.h5`
  margin: 0;
`
const StyledDivButton = styled.div`
  width: 40%;
  padding-top: 20px;
  text-align: center;
  @media(max-width: 700px) {
    width: 0100%;
    display: flex;
  };
`
const StyledButton = styled.button<ButtonProps>`
  width: auto;
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
  @media(max-width: 700px) {    
    width: 50%;
  };
`
const ModalPortal: NextPage<Props> = ({ children }: Props) => {
  const target = document.getElementById('modal');
  return createPortal(children, target!);
};

  export const Bottombar: NextPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <StyledDiv id="modal">
        <StyledDivFont>
          <StyledDivH2>「いま」起きていることを見つけよう</StyledDivH2>
          <StyledDivH5>Twitterなら、「いま」起きていることをいち早くチェックできます。</StyledDivH5>
        </StyledDivFont>
        <StyledDivButton>
          <StyledButton bgColor='#00a2ff' color='white' hoverBgColor='#00b7ff' onClick={() => setModalOpen(true)}>&emsp;ログイン&emsp;</StyledButton>
          {modalOpen && (
            <ModalPortal>
              <LoginModal  handleCloseClick={() => setModalOpen(false)}/>
            </ModalPortal>
          )}
          <StyledButton bgColor='white' color='black' hoverBgColor='#d4deed'>&emsp;アカウント作成&emsp;</StyledButton>
        </StyledDivButton>
      </StyledDiv>
    )
}

export default Bottombar
