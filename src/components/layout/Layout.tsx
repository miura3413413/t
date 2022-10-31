import type { NextPage } from 'next'
import Head from 'next/head'
import { Rightbar } from '../rightbar/Rightbar'
import { Sidebar }from '../sidebar/Sidebar'

import styled from '@emotion/styled';
import { Topbar } from '../topbar/Topbar'
import Bottombar from '../bottombar/Bottombar';
import { useSession } from 'next-auth/react';

interface Props {
  title: string | undefined | null,
  children: React.ReactNode
}

const StyledMain = styled.main`
  height: 100%;
  display: flex;

`

const StyledDiv = styled.div`
  flex-direction: column;
  width: 33%;
  height: auto;
  margin-top: 0;
  border-right: solid thin #daeeee;
  @media (max-width: 1200px) {
    width: 55%;
  };
  @media (max-width: 1000px) {
    width: 65%;
  };
  @media(max-width: 720px) {
    width: 85%;
  };
`


export const Layout: NextPage<Props> = ({ title, children }) => {
  const { status } = useSession()
  return (
    <div>
      <Head>
        <title>{title}/Twitter</title>
      </Head>
      <StyledMain>
        <Sidebar />
        <StyledDiv>
          <Topbar title={title}/>
          {children}
        </StyledDiv>
        <Rightbar />
      </StyledMain>
      {status==="authenticated" || <Bottombar />}

    </div>
  )
}

export default Layout