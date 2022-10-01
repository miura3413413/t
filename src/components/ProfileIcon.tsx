import { NextPage } from "next"
import Image from "next/image"

const ProfileIcon: NextPage = () => {
  return (
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '50px', height: '50px', margin: "20px" }}>
        <Image  src="/default_profile_400x400_l.webp" width="50" height="50" objectFit="cover" />
      </div>
    
  )
}

export default ProfileIcon
