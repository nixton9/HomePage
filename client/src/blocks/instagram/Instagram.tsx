import React from 'react'

interface InstagramProps {
  followers: string
}

export const Instagram: React.FC<InstagramProps> = ({ followers }) => {
  return (
    <div>
      <p>Insta - {followers} followers</p>
    </div>
  )
}
