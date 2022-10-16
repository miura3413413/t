import type { NextPage } from 'next'
import ProfileLayout from '../components/layout/ProfileLayout'
import { dummyTweets } from '../models/dummydata'
import { Tweet } from '../components/timeline/Tweet'
export const Profile: NextPage = () => {
  return (
    <ProfileLayout title={"test"} >
      {dummyTweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet._id}/>
      ))}
    </ProfileLayout>
  )
}

export default Profile