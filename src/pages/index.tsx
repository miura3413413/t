import type { NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/layout/Layout'

export const Home: NextPage = ( ) => {
  return (
    <Layout title={"ホーム"}>
      <Timeline/>
    </Layout>
  )
}

export default Home

// export const getServerSideProps = async () => {

//   const mydomain = process.env.MY_DOMAIN
//   const tweets = await axios.get(mydomain + "/api/test/tweet")

//   return { props: {tweets: tweets.data}}
// }

