import type { GetServerSideProps, NextPage } from 'next'
import ProfileLayout from '../components/layout/ProfileLayout'
import { TweetCard } from '../components/timeline/TweetCard'
import db from '../../util/connect'
import { Tweet, TweetType } from '../models/TweetModel'
import axios from 'axios'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { UserType } from '../models/UserModel'



export const getPost = async ()  => {
  const resTweet = await axios.get("http://localhost:3000/api/test/tweet");
  const resUser = await axios.get("http://localhost:3000/api/test/user");
  const data:{tweet: TweetType[], user: UserType[]} = {
    tweet: resTweet.data,
    user: resUser.data,
  }
  
  return data
}

export const usePost = () => {
  return useQuery(['post'], () => getPost());
}

export const Profile: NextPage= () => {
  const { data, isLoading } = usePost();

  if(data) {
    return (
      <ProfileLayout title={"test"} >
      {data.tweet.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet._id}/>
      ))}
    </ProfileLayout>
    )
  }
  return (
    // <ProfileLayout title={"test"} >
    //   {tweets.map((tweet) => (
    //     <TweetCard tweet={tweet} key={tweet._id}/>
    //   ))}
    // </ProfileLayout>
    <div>not found</div>
  )
}

export default Profile

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(['post'], () => getPost())
  return {
    props: {
        dehydratedState: dehydrate(queryClient),
    },
}
}
