import type { GetServerSideProps, NextPage } from 'next'
import ProfileLayout from '../components/layout/ProfileLayout'
import { TweetCard } from '../components/timeline/TweetCard'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { getPost, usePost } from '../../util/fetchFunction'
import { Sidebar } from '../components/sidebar/Sidebar'

export const Profile: NextPage<any>= ({dehydratedState, id}): any => {

  const { data, isLoading } = usePost(id);
  console.log(data)
  if(data?.user) {
    return (
      <ProfileLayout title={"test"} user={data.user}>
      {data.tweets.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet._id}/>
      ))}
    </ProfileLayout>
    )
  }
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <h4 style={{textAlign: "center", margin: "100px auto"}}>このページは存在しません。他のページを検索してみましょう。</h4>
    </div>


  )
}

export default Profile

export const getServerSideProps: GetServerSideProps = async (context) => {
  const  id  = context.query.id    
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(['post',id], () => getPost(id))
  return {
    props: {
        dehydratedState: dehydrate(queryClient),
        id: id,
    },
  }
}
