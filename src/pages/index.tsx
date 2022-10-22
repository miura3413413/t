import type { GetServerSideProps, NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/layout/Layout'
import connectMongo from '../../util/connect'
import { Tweet, TweetType } from '../models/TweetModel'
import db from '../../util/connect'

export interface Props {
  tweets: TweetType[]
}

export const Home = ({ tweets }: Props) => {
  console.log(tweets)
  return (
    <Layout title={"ホーム"}>
      <Timeline tweets={tweets}/>
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  await db.connectMongo()
  const tweets = await Tweet.find()

  return {
    props: {
       tweets: JSON.parse(JSON.stringify(tweets))
    }
  }
}

