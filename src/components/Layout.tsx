import type { NextPage } from 'next'
import Head from 'next/head'
import { Rightbar } from '../components/rightbar/Rightbar'
import { Sidebar }from '../components/sidebar/Sidebar'

import styled from '@emotion/styled';
import { Topbar } from '../components/topbar/Topbar'

interface Props {
  title: string,
  children: React.ReactNode
}

const StyledMain = styled.main`
  display: flex;
`

const StyledDiv = styled.div`
  flex-direction: column;
  width: 40%;
  margin-top: 0;
  @media (max-width: 1200px) {
    width: 55%;
  };
  @media(max-width: 720px) {
    width: 80%;
  };
`
export const Layout: NextPage<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}/Twitter</title>
      </Head>
      <StyledMain>
        <Sidebar />
        <StyledDiv>
          <Topbar />
          {children}
        </StyledDiv>
        <Rightbar />
      </StyledMain>
    </div>
  )
}

export default Layout