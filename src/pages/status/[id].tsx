import type { GetServerSideProps, NextPage } from 'next'
import { Timeline } from '../../components/timeline/Timeline'
import Layout from '../../components/layout/Layout'
import { Tweet, TweetType } from '../../models/TweetModel'
import db from '../../../util/connect'
import { TweetCard } from '../../components/timeline/TweetCard'

export interface Props {
  query: {id: string},
  tweet: TweetType
}

export const Home: NextPage<Props> = ({ query, tweet}: Props) => {
  return (
    <Layout title={"ツイート"}>
      <TweetCard tweet={tweet}/>
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  await db.connectMongo()
  const tweet = await Tweet.findOne({_id: query.id})

  return {
    props: {
       query,
       tweet: JSON.parse(JSON.stringify(tweet))
    }
  }
}