import type { GetServerSideProps, NextPage } from 'next'
import ProfileLayout from '../components/layout/ProfileLayout'
import { TweetCard } from '../components/timeline/TweetCard'
import db from '../../util/connect'
import { Tweet, TweetType } from '../models/TweetModel'
import axios from 'axios'

export interface Props {
  tweets: TweetType[]
}


export const Profile: NextPage<Props> = ({ tweets }: Props) => {
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
  const res = await fetch("http://localhost:3000/api/test/tweet");
  const tweets = await res.json()
  return {
    props: {
       tweets: tweets
    }
  }
}
