import React from 'react'
import { Shot, Category } from './DribbbleContainer'

interface DribbbleProps {
  shots: Shot[] | []
  categories: Category[] | []
  shotsLoading: boolean
  selectedCategory: string | undefined
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const Dribbble: React.FC<DribbbleProps> = ({
  shots,
  categories,
  shotsLoading,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className="dribbble">
      {categories.length > 0 && (
        <div className="dribbble_categories">
          {(categories as Category[]).map(cat => (
            <div
              key={cat.value ? cat.value : 'all'}
              className={
                cat.value === selectedCategory
                  ? 'category selected'
                  : 'category'
              }
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.name}
            </div>
          ))}
        </div>
      )}

      {shotsLoading ? (
        <div className="inner-loading">Loading shots ...</div>
      ) : shots.length > 0 ? (
        <div className="dribbble_shots">
          {(shots as Shot[]).map(shot => (
            <div key={shot.image} className="shot">
              <a href={shot.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={shot.image}
                  alt={shot.title}
                  className="shot__image"
                />
                <h3 className="shot__title">{shot.title}</h3>
              </a>
              <a
                href={shot.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={shot.authorImage}
                  alt={shot.authorName}
                  className="shot__image"
                />
                <h5 className="shot__title">{shot.authorName}</h5>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="dribbble__nodata">
          There are no Dribbble shots in here
        </div>
      )}
    </div>
  )
}
