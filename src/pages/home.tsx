import type {  NextPage } from 'next'
import { Timeline } from '../components/timeline/Timeline'
import Layout from '../components/layout/Layout'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

  export const Home: NextPage = () => {
    const { data: session} = useSession()
    const router = useRouter()
    useEffect(() => {
      if(session?.user) {
        router.push("/home")
      }else{
        router.push("/")
      }
      
    }, [session])
    
    return (
      <Layout title={"ホーム"}>
      <Timeline/>
    </Layout>
    )
}

export default Home
