import type { GetServerSideProps, NextPage } from 'next'
import ProfileLayout from '../components/layout/ProfileLayout'
import { TweetCard } from '../components/timeline/TweetCard'
import db from '../../util/connect'
import { Tweet, TweetType } from '../models/TweetModel'

export interface Props {
  tweets: TweetType[]
}


export const Profile = ({ tweets }: Props) => {
  return (
    <ProfileLayout title={"test"} >
      {tweets.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet._id}/>
      ))}
    </ProfileLayout>
  )
}

export default Profile

export const getServerSideProps: GetServerSideProps = async () => {
  await db.connectMongo()
  const tweets = await Tweet.find()

  return {
    props: {
       tweets: JSON.parse(JSON.stringify(tweets))
    }
  }
}
