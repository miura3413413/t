import type {  NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/layout/Layout'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export const Home: NextPage = () => {
  // const { status } = useSession()
  // const router = useRouter()
  // useEffect(() => {
  //   if(status === "unauthenticated") {
  //     router.replace("/")
  //   }
  // }, [status])

  return (
    <Layout title={"ホーム"}>
      <Timeline/>
    </Layout>
  )
}

export default Home
