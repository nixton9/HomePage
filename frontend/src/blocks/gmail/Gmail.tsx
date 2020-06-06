import React from 'react'
import { GmailStyles } from '../../styles/GmailStyles'
import { extractEmailInfo, removeEmojisFromString } from '../../helpers/random'
import { getDayAndMonth } from '../../helpers/date'
import { Actions } from '../../components/Actions'

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

export const Gmail: React.FC<EmailProps> = ({
  emails,
  userEmail,
  handleLogout,
  markAsRead,
  reloadEmails
}) => {
  return (
    <GmailStyles>
      <div className="emails block-overflow">
        {emails.map(email => (
          <a
            key={email.id}
            href={`https://mail.google.com/mail/u/?authuser=${userEmail}#all/${email.threadId}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => markAsRead(email.id)}
          >
            <div
              className={
                email.unRead
                  ? 'email__single block-single unread'
                  : 'email__single block-single'
              }
            >
              <div>
                <div className="email__single__from">
                  <h3 className="email__single__from__name">
                    {extractEmailInfo(email.from).name || '-'}
                  </h3>
                  <span className="email__single__from__email">
                    {extractEmailInfo(email.from).email || '-'}
                  </span>
                </div>
                <div className="email__single__text">
                  <p>
                    <strong>{removeEmojisFromString(email.subject)} </strong>
                    {email.snippet.substring(0, 120)}
                  </p>
                </div>
              </div>
              <div className="email__single__date">
                {getDayAndMonth(email.date)}
              </div>
            </div>
          </a>
        ))}
      </div>

      <Actions
        link={`https://mail.google.com/mail/u/?authuser=${userEmail}`}
        reload={reloadEmails}
        logout={handleLogout}
      />
    </GmailStyles>
  )
}
