import React from 'react'
import { Notification } from './GithubContainer'
import { Actions } from '../../components/Actions'
import { GithubStyles } from '../../styles/GithubStyles'
import { getDayAndMonth } from '../../helpers/date'
import { formatGithubReason } from '../../helpers/random'

interface GithubProps {
  notifications: Notification[] | []
  markAsRead: (id: string, unread: boolean) => void
  reload: () => void
}

export const Github: React.FC<GithubProps> = ({
  notifications,
  markAsRead,
  reload
}) => {
  return (
    <GithubStyles>
      <div className="notifications block-overflow">
        {notifications.length > 0 ? (
          (notifications as any).map(not => (
            <a
              key={not.id}
              href={not.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => markAsRead(not.id, not.unread)}
            >
              <div
                className={
                  not.unread
                    ? 'notification__single block-single unread'
                    : 'notification__single block-single'
                }
              >
                <div>
                  <div className="notification__single__info">
                    <h3 className="notification__single__info__repo">
                      {not.repository}
                    </h3>
                    <span className="notification__single__info__reason">
                      {formatGithubReason(not.reason)}
                    </span>
                  </div>
                  <div className="notification__single__title">
                    <p>{not.title}</p>
                  </div>
                </div>
                <div className="notification__single__date">
                  {getDayAndMonth(not.date)}
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="nodata">There are no notifications in here</div>
        )}
      </div>
      <Actions link={`https://github.com/notifications`} reload={reload} />
    </GithubStyles>
  )
}
