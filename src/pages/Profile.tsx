import type { NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/Layout'
import Image from 'next/image'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
export const Profile: NextPage = ( ) => {
const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

const StyledDivImage = styled.div`
  position: absolute;
  top: 150px;
  left: 10px;
  border: 5px solid white;
  border-radius: 50%;
`
const StyledButton = styled.button`
  float: right;
  margin: 10px;
  border-radius: 20px;
  height: 35px;
  width: 160px;
  border: 1px solid silver;
  background-color: white;
  font-weight: bold;
  :hover {
    background-color: #dedede;
  }
`
const StyledH2 = styled.h2`
  margin: 90px 0 0 20px;
`

  return (
    <Layout title={"プロフィール"}>
      <StyledDiv>
        <Image src="/inkeffectgalaxy_apple.jpg"
        layout='fill'
        objectFit="cover"
        />
        <StyledDivImage>
        <Image 
          src="/default_profile_400x400_l.webp"
          width={130}
          height={130}
          className={css`
            border-radius: 50%;
          `}
        />
        </StyledDivImage>

      </StyledDiv>
      <StyledButton>プロフィールを設定</StyledButton>
      <StyledH2>test</StyledH2>
      <div>
        <h5>1 フォロー中</h5>
        <h5>1 フォロワー</h5>
      </div>

    </Layout>
  )
}

export default Profile