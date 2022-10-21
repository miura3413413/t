import type { NextPage } from 'next'
import Layout from './Layout'
import Image from 'next/image'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import Link from 'next/link'

interface Props {
  title: string
  children: React.ReactNode
}

export const ProfileLayout: NextPage<Props> = ({ title ,children }) => {


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
  const StyledSettingButton = styled.button`
    float: right;
    margin: 10px;
    border-radius: 20px;
    height: 35px;
    width: 160px;
    border: 1px solid silver;
    background-color: white;
    font-weight: bold;
    :hover {
      background-color: #efefef;
    }
  `
  const StyledH2 = styled.h2`
    margin: 90px 0 0 20px;
  `

  const StyledDivH5 = styled.div`
    display: flex;
    margin: 0 0 0 10px;
    gap: 15px;
  `
  const StyledH5 = styled.h5`
    color: gray;
    padding-bottom: 0;
    :hover {
      border-bottom: solid thin;
      cursor: pointer;
    }
  `

  const StyledDivButoon = styled.div`
    display: flex;
  `

  const StyledButton = styled.button`
    width: 100%;
    height: 50px;
    white-space: nowrap;
    border: none;
    background-color: white;
    transition: 0.3s;
    border-bottom: solid thin #daeeee;
    :hover{
      background-color: #e2e2e2;
    }
  `

  return (
    <Layout title={title}>
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
      <StyledSettingButton>プロフィールを設定</StyledSettingButton>
      <StyledH2>test</StyledH2>
      <StyledDivH5>
        <StyledH5><span style={{color: "black"}}>1</span> フォロー中</StyledH5>
        <StyledH5><span style={{color: "black"}}>1</span> フォロワー</StyledH5>
      </StyledDivH5>
      <StyledDivButoon>
      <Link href={"/profile"}>
        <StyledButton>ツイート</StyledButton>
      </Link>
      <Link href={"/with_replies"}>
        <StyledButton>ツイートと返信</StyledButton>
      </Link>
      <Link href={"/media"}>
        <StyledButton>メディア</StyledButton>
      </Link>
      <Link href={"/likes"}>
        <StyledButton>いいね</StyledButton>
      </Link>
      </StyledDivButoon>
      {children}
    </Layout>
  )
}

export default ProfileLayout