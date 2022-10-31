import type {  NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/layout/Layout'

  export const Home: NextPage = () => {
    return (
      <Layout title={"ホーム"}>
      <Timeline/>
    </Layout>
    )
}

export default Home
