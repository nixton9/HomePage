import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Instagram } from './Instagram'
import { instagramUserState } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const InstagramContainer: React.FC = () => {
  const [instagramUser] = useRecoilState(instagramUserState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [followers, setFollowers] = useState('')

  const fetchData = () => {
    const url = `https://www.instagram.com/${instagramUser}`
    console.log(url)
    axios
      .get(url)
      .then(res => {
        const parser = new DOMParser()
        const parsedFile = parser.parseFromString(res.data, 'text/html')
        const content = parsedFile
          .querySelector('meta[property="og:description"]')!
          .getAttribute('content')
        setFollowers(`${content!.split(' ')[0]}${content!.split(' ')[1]}`)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Instagram followers')
        setLoading(false)
      })
  }

  useEffect(() => {
    console.log(instagramUser)
    if (instagramUser) {
      fetchData()
    } else {
      setError('You need to set your Instagram user on the settings')
    }
  }, [instagramUser])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Instagram"
    >
      <Instagram followers={followers} />
    </BlockWrapper>
  )
}

export default InstagramContainer
