import type { NextPage } from 'next'
import Image from 'next/image'
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
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
  height: 83vh;
  padding-top: 50px;
  padding-left: 30px;
`

const StyledH1 = styled.h1`
  font-size: 60px;
`

const StyledDivButtomImage = styled.div`
  width: 100%;
  height: 17vh;
  position: relative;
  
  @media(min-width: 1000px) {
    display: none;
  };

`

export const Login: NextPage = () => {
  return (
    <StyledDiv>
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
          <Image src="/2021 Twitter logo - blue.png" width={50} height={50} objectFit="contain"/>
          <StyledH1>すべての話題が、ここに。</StyledH1>
          <h2>Twitterを始めよう</h2>
          <button>Googleで登録</button>
          <button>Appleのアカウントで登録</button>
          <p>または</p>
          <button>電話番号またはメールアドレスで登録</button>
          <h3>アカウントをお持ちの場合</h3>
          <button>ログイン</button>
        </StyledDivMain>
        <StyledDivButtomImage>
          <Image src="/lohp_1302x955.png"  layout="fill"  objectFit="cover"/>
        </StyledDivButtomImage>
      </StyledDivRight>
    </StyledDiv>
    
  )
}

export default Login