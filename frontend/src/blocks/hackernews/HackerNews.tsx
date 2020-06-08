import React from 'react'
import { News } from './HackerNewsContainer'
import { HackerNewsStyles } from '../../styles/HackerNewsStyles'
import { FaHackerNewsSquare } from 'react-icons/fa'
import { getTimeFromNow } from '../../helpers/date'

interface HackerNewsProps {
  news: News[] | []
}

export const HackerNews: React.FC<HackerNewsProps> = ({ news }) => {
  return (
    <HackerNewsStyles>
      {news.length > 0 ? (
        <div className="news-list">
          {(news as any).map(item => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="news translate-top-on-hover">
                <div className="news__icon">
                  <FaHackerNewsSquare />
                </div>
                <div className="news__content">
                  <h3 className="news__content__title">{item.title}</h3>
                  <p className="news__content__date">
                    {getTimeFromNow(item.time)}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="nodata">There are no News in here</div>
      )}
    </HackerNewsStyles>
  )
}
