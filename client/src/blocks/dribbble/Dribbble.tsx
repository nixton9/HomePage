import React from 'react'
import { Shot } from './DribbbleContainer'
import { Categories, Category } from '../../components/Categories'
import { DribbbleStyles } from '../../styles/DribbbleStyles'
import { LoadingSpinner } from '../../components/LoadingSpinner'

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
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {shotsLoading ? (
        <div className="inner-loading">
          <LoadingSpinner />
        </div>
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
                    className="shot__author__img rotate-on-hover"
                    style={{ backgroundImage: `url(${shot.authorImage})` }}
                  ></div>
                  <h5 className="shot__author__name translate-right-on-hover">
                    {shot.authorName}
                  </h5>
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
