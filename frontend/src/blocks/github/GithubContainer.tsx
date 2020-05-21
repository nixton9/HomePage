import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Github } from './Github'
import { githubKeyState } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const GithubContainer: React.FC = () => {
  const [githubKey] = useRecoilState(githubKeyState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchNotifications = () => {
    setLoading(true)
    const url = `https://api.github.com/notifications?all=true`
    axios
      .get(url, { headers: { Authorization: `Bearer ${githubKey}` } })
      .then(res => {
        console.log(res)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Github notifications')
        setLoading(false)
      })
  }

  useEffect(() => {
    if (githubKey) {
      fetchNotifications()
    } else {
      setError('You need to set a Github key on the settings')
    }
  }, [githubKey])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Github"
    >
      <Github />
    </BlockWrapper>
  )
}

export default GithubContainer
