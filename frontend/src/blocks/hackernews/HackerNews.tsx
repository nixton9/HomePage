import React from 'react'
import { News } from './HackerNewsContainer'

interface HackerNewsProps {
  news: News[] | []
}

export const HackerNews: React.FC<HackerNewsProps> = ({ news }) => {
  return (
    <div className="news">
      {news.length > 0 ? (
        <div className="news__list">
          {(news as any).map(item => (
            <div key={item.id} className="news__single">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="news__avatar">HN</div>
                <p>{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="news__nodata">There are no News in here</div>
      )}
    </div>
  )
}
