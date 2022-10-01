import type { NextPage } from 'next'
import Head from 'next/head'
import Rightbar from '../components/rightbar/Rightbar'
import Sidebar from '../components/sidebar/Sidebar'
import Timeline from '../components/timeline/Timeline'


import { styled } from '@mui/material/styles';

const Home: NextPage = () => {
const StyledMain = styled("main")({
  display: "flex",
})


  return (
    <div>
      <Head>
        <title>Twitter clone</title>
      </Head>

      <StyledMain>
        <Sidebar />
        <Timeline />
        <Rightbar />
      </StyledMain>
    </div>
  )
}

export default Home

