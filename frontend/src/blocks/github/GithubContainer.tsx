import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Github } from './Github'
import { githubKeyState, githubCounterState } from '../../state/atoms'
import { useRecoilState } from 'recoil'
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
  const [githubKey] = useRecoilState(githubKeyState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notifications, setNotifications] = useState<Notification[] | []>([])
  const [unreadGithubCount, setUnreadGithubCount] = useRecoilState(
    githubCounterState
  )

  const fetchNotifications = () => {
    setLoading(true)
    const url = `https://api.github.com/notifications?all=true`
    axios
      .get(url, { headers: { Authorization: `Bearer ${githubKey}` } })
      .then(res => {
        const allNotifications: Notification[] = []
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
              setError('There was an error fetching Github notifications')
              setLoading(false)
            })
        })
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Github notifications')
        setLoading(false)
      })
  }

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
  }, [githubKey])

  useEffect(() => {
    const count = notifications.filter(not => not.unread).length
    setUnreadGithubCount(count)
  }, [notifications])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Github"
    >
      <Github notifications={notifications} markAsRead={markAsRead} />
    </BlockWrapper>
  )
}

export default GithubContainer
