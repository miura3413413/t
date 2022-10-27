import { NextPage } from "next"
import styled from '@emotion/styled'

interface Props {
  title: string | undefined | null
}

const StyledDiv = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  margin-top: 0;
  padding: 10px;
  z-index: 1;
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(10px);
`

const StyledHome = styled.h1`
  margin-top: 0px;
  font-size: 20px;
  padding-left: 5px;
`

export const Topbar: NextPage<Props> = ({ title }) => {
  return (
    <StyledDiv >
      <StyledHome>{title}</StyledHome>
    </StyledDiv>
  )

}

