import React from 'react'
import { Website } from './WebsitesContainer'

interface WebsitesProps {
  websites: Website[] | []
  deleteWebsite: (id: string) => void
}

export const Websites: React.FC<WebsitesProps> = ({
  websites,
  deleteWebsite
}) => {
  return (
    <div className="websites">
      {websites.length > 0 ? (
        <div className="websites__list">
          {(websites as any).map(website => (
            <div key={website.id} className="websites__single">
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                <img src={website.icon} alt={website.name} />
                <p>{website.name}</p>
              </a>
              <button onClick={() => deleteWebsite(website.id)}>X</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="websites__nodata">There are no websites in here</div>
      )}
    </div>
  )
}
