import type { NextPage } from 'next'
import Head from 'next/head'
import Rightbar from '../components/rightbar/Rightbar'
import Sidebar from '../components/sidebar/Sidebar'
import Timeline from '../components/timeline/Timeline'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter clone</title>
      </Head>

      <main>
      <Sidebar />
      <Timeline />
      <Rightbar />
      </main>
    </div>
  )
}

export default Home

