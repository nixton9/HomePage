import React from 'react'
import { EmailBlock } from '../../styles/EmailBlock'

interface EmailProps {
  emails: {
    id: string
    threadId: string
    internalDate: string
    subject: string
    snippet: string
    date: string
    from: string
    unRead: boolean
  }[]
  userEmail: string
  handleLogout: () => void
  reloadEmails: () => void
  markAsRead: (id: string) => void
}

export const Email: React.FC<EmailProps> = ({
  emails,
  userEmail,
  handleLogout,
  markAsRead,
  reloadEmails
}) => {
  return (
    <EmailBlock>
      <div className="emails">
        {emails.map(email => (
          <a
            key={email.id}
            href={`https://mail.google.com/mail/u/0/#all/${email.threadId}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => markAsRead(email.id)}
          >
            <div className="email__single">
              {email.subject} - {email.unRead.toString()}
            </div>
          </a>
        ))}
      </div>

      <a
        href={`https://mail.google.com/mail/u/?authuser=${userEmail}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See All
      </a>
      <button onClick={reloadEmails}>Reload</button>
      <button onClick={handleLogout}>Log Out</button>
    </EmailBlock>
  )
}
