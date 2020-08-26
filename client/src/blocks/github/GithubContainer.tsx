import React, { useState, useEffect, useCallback } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Github } from './Github'
import { githubKeyState, githubCounterState } from '../../state/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import axios from 'axios'

export interface Notification {
  id: string
  date: string
  unread: boolean
  reason: string
  title: string
  url: string
  repository: string
}

const GithubContainer: React.FC = () => {
  const githubKey = useRecoilValue(githubKeyState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notifications, setNotifications] = useState<Notification[] | []>([])
  const setUnreadGithubCount = useSetRecoilState(githubCounterState)

  const fetchNotifications = useCallback(() => {
    setLoading(true)
    setNotifications([])
    const url = `https://api.github.com/notifications?all=true`
    axios
      .get(url, { headers: { Authorization: `Bearer ${githubKey}` } })
      .then(res => {
        res.data.forEach(not => {
          axios
            .get(not.subject.url, {
              headers: { Authorization: `Bearer ${githubKey}` }
            })
            .then(response => {
              let notification: Notification = {
                id: not.id,
                date: not.last_read_at,
                unread: not.unread,
                reason: not.reason,
                title: not.subject.title,
                url: response.data.html_url,
                repository: not.repository.full_name
              }
              setNotifications(prevState => [...prevState, notification])
              setLoading(false)
            })
            .catch(err => {
              setLoading(false)
            })
        })
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Github notifications')
        setLoading(false)
      })
  }, [githubKey])

  const markAsRead = (id, unread) => {
    if (unread) {
      const url = `https://api.github.com/notifications/threads/${id}`
      axios
        .patch(url, {}, { headers: { Authorization: `Bearer ${githubKey}` } })
        .then(res => {
          const newNotifications = (notifications as any).map(not =>
            not.id === id ? { ...not, unread: false } : not
          )
          setNotifications(newNotifications)
        })
        .catch(err => console.log(err.response))
    }
  }

  useEffect(() => {
    if (githubKey) {
      fetchNotifications()
    } else {
      setError('You need to set a Github key on the settings')
    }
  }, [githubKey, fetchNotifications])

  useEffect(() => {
    const count = notifications.filter(not => not.unread).length
    setUnreadGithubCount(count)
  }, [notifications, setUnreadGithubCount])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Github"
    >
      <Github
        notifications={notifications}
        markAsRead={markAsRead}
        reload={fetchNotifications}
      />
    </BlockWrapper>
  )
}

export default GithubContainer
