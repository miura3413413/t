import type { NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/layout/Layout'

import { Tweet, TweetType } from '../models/TweetModel'
import { usePost } from './[id]'


export interface Props {
  tweets: TweetType[]
}




  export const Home: NextPage<Props> = () => {
  const { data, isLoading } = usePost();
  console.log(data)
  if(data) {
    return (
      <Layout title={"ホーム"}>
      <Timeline tweets={data.tweet}/>
    </Layout>
    )
  }
  return (
    
    // <Layout title={"ホーム"}>
    //   <Timeline tweets={data.tweet}/>
    // </Layout>
    <div>not found</div>
  )
}

export default Home


