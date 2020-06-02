import React from 'react'
import { Shot, Category } from './DribbbleContainer'
import { DribbbleStyles } from '../../styles/DribbbleStyles'

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
    <DribbbleStyles>
      {categories.length > 0 && (
        <div className="categories">
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
        <div className="shots">
          {(shots as Shot[]).map(shot => (
            <div key={shot.image} className="shot">
              <a href={shot.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="shot__img"
                  style={{ backgroundImage: `url(${shot.image})` }}
                >
                  <div className="shot__title">
                    <h3>{shot.title}</h3>
                  </div>
                </div>
              </a>
              <a
                href={shot.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="shot__author">
                  <div
                    className="shot__author__img"
                    style={{ backgroundImage: `url(${shot.authorImage})` }}
                  ></div>
                  <h5 className="shot__author__name">{shot.authorName}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="nodata">There are no Dribbble shots in here</div>
      )}
    </DribbbleStyles>
  )
}
