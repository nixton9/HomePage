// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Gmail } from './Gmail'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { useRecoilState } from 'recoil'
import { mailCounterState } from '../../state/atoms'

const GmailContainer: React.FC = () => {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const SCOPES =
    'https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly'

  const [loading, setLoading] = useState(true)
  const [signedIn, setSignedIn] = useState(false)
  const [clientLoaded, setClientLoaded] = useState(false)
  const [userID, setUserID] = useState(undefined)
  const [userEmail, setUserEmail] = useState(undefined)
  const [messagesIds, setMessagesIds] = useState([])
  const [emails, setEmails] = useState([])
  const [error, setError] = useState(false)
  const [unreadMailCount, setUnreadMailCount] = useRecoilState(mailCounterState)

  const handleAuth = () => {
    return gapi.auth2
      .getAuthInstance()
      .signIn({ scope: SCOPES })
      .then(
        () => setSignedIn(true),
        err => {
          setSignedIn(false)
          setLoading(false)
          alert('Error login in to Gmail')
        }
      )
  }

  const loadClient = () => {
    gapi.client.setApiKey('')
    return gapi.client
      .load('https://content.googleapis.com/discovery/v1/apis/gmail/v1/rest')
      .then(
        () => setClientLoaded(true),
        err => {
          setClientLoaded(false)
          setLoading(false)
          setError('Error loading GAPI client for API')
        }
      )
  }

  const listMessages = () => {
    setLoading(true)
    return gapi.client.gmail.users.messages
      .list({ userId: userID, maxResults: 15, q: 'category: primary' })
      .then(
        res => {
          const messages = res.result.messages
          let messagesIds = []
          messages.forEach(msg => messagesIds.push(msg.id))
          setMessagesIds(messagesIds)
          setError('')
        },
        err => {
          setError('Error getting messages')
          setLoading(false)
          setMessagesIds([])
        }
      )
  }

  const listEmails = () => {
    setEmails([])
    messagesIds.forEach(id => getSingleEmail(id))
    setLoading(false)
  }

  const getSingleEmail = messageId => {
    var request = gapi.client.gmail.users.messages.get({
      userId: userID,
      id: messageId,
      format: 'metadata',
      metadataHeaders: ['Subject', 'From', 'Date']
    })
    return request.execute(res => {
      const email = {
        id: res.id,
        threadId: res.threadId,
        subject: res.payload.headers.filter(item => item.name === 'Subject')[0]
          .value,
        from: res.payload.headers.filter(item => item.name === 'From')[0].value,
        date: res.payload.headers.filter(item => item.name === 'Date')[0].value,
        internalDate: res.internalDate,
        snippet: res.snippet,
        unRead: res.labelIds.includes('UNREAD')
      }
      setEmails(prevState => [...prevState, email])
    })
  }

  const handleLogout = () => {
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function() {
      auth2.disconnect()
      setSignedIn(false)
    })
  }

  const markAsRead = emailId => {
    const newEmails = emails.map(email =>
      email.id === emailId ? { ...email, unRead: false } : email
    )
    setEmails(newEmails)
  }

  useEffect(() => {
    gapi.load('client:auth2', function() {
      gapi.auth2.init({ client_id: CLIENT_ID }).then(googleAuth => {
        loadClient()
        if (
          gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getBasicProfile()
        ) {
          setUserID(
            gapi.auth2
              .getAuthInstance()
              .currentUser.get()
              .getBasicProfile()
              .getId()
          )
          setUserEmail(
            gapi.auth2
              .getAuthInstance()
              .currentUser.get()
              .getBasicProfile()
              .getEmail()
          )
        }
        if (googleAuth.isSignedIn.get()) {
          setSignedIn(true)
        }
      })
    })
  }, [CLIENT_ID, signedIn])

  useEffect(() => {
    if (clientLoaded && userID) {
      listMessages().then(() => listEmails())
    }
  }, [clientLoaded, userID])

  useEffect(() => {
    if (messagesIds.length > 0) {
      listEmails()
    }
  }, [messagesIds])

  useEffect(() => {
    const count = emails.filter(email => email.unRead).length
    setUnreadMailCount(count)
  }, [emails])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Email"
    >
      {signedIn ? (
        <Gmail
          emails={emails.sort(
            (a, b) => parseInt(b.internalDate) - parseInt(a.internalDate)
          )}
          handleLogout={handleLogout}
          markAsRead={markAsRead}
          reloadEmails={listMessages}
          userEmail={userEmail}
        />
      ) : (
        <button className="login" onClick={handleAuth}>
          Login
        </button>
      )}
    </BlockWrapper>
  )
}

export default GmailContainer
