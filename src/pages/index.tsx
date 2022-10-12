import type { NextPage } from 'next'
import Head from 'next/head'
import { Rightbar } from '../components/rightbar/Rightbar'
import { Sidebar }from '../components/sidebar/Sidebar'
import { Timeline } from '../components/timeline/Timeline'

import styled from '@emotion/styled';
import { Topbar } from '../components/topbar/Topbar'
import axios from 'axios'


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
export const Home: NextPage = ( ) => {



  return (
    <div>
      <Head>
        <title>Twitter clone</title>
      </Head>

      <StyledMain>
        <Sidebar />
        <StyledDiv>
          <Topbar />
          <Timeline/>
        </StyledDiv>
        <Rightbar />
      </StyledMain>
    </div>
  )
}

export default Home

// export const getServerSideProps = async () => {

//   const mydomain = process.env.MY_DOMAIN
//   const tweets = await axios.get(mydomain + "/api/test/tweet")

//   return { props: {tweets: tweets.data}}
// }

