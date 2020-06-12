import React from 'react'
import { NewsInterface } from './NewsContainer'
import { Categories, Category } from '../../components/Categories'
import { NewsStyles } from '../../styles/NewsStyles'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { dateToString } from '../../helpers/date'

interface NewsProps {
  news: NewsInterface[] | []
  categories: Category[] | []
  newsLoading: boolean
  selectedCategory: string | undefined
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const News: React.FC<NewsProps> = ({
  news,
  categories,
  newsLoading,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <NewsStyles>
      {categories.length > 0 && (
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {newsLoading ? (
        <div className="inner-loading">
          <LoadingSpinner />
        </div>
      ) : news.length > 0 ? (
        <div className="articles">
          {(news as NewsInterface[]).map(item => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="article">
                <div
                  className="article__img"
                  style={{
                    backgroundImage: `url(${item.img})`
                  }}
                >
                  <div className="article__meta">
                    <p className="article__meta__date">
                      {dateToString(item.date)}
                    </p>
                    <div className="article__meta__desc">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="article__title">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="nodata">There are no News in here</div>
      )}
    </NewsStyles>
  )
}
