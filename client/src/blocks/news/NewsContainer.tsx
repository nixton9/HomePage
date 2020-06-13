// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { News } from './News'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Category } from '../../components/Categories'
import axios from 'axios'

export interface NewsInterface {
  title: string
  description: string
  url: string
  img: string
  date: string
}

const NewsContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [newsLoading, setNewsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [news, setNews] = useState<News[] | []>([])
  const [categories, setCategories] = useState<Category[] | []>([])
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    ''
  )

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const fetchNews = () => {
    setNewsLoading(true)
    const url = selectedCategory
      ? `/api/news/${selectedCategory}/${API_KEY}`
      : `/api/news/${API_KEY}`

    axios
      .get(url)
      .then(res => {
        const allNews: NewsInterface[] = []
        res.data.articles.forEach((art: any) => {
          let article = {
            title: art.title,
            description: art.description,
            url: art.url,
            img: art.urlToImage,
            date: art.publishedAt
          }
          allNews.push(article)
        })
        setNews(allNews)
        setNewsLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching news')
        setNewsLoading(false)
      })
  }

  const fetchCategories = () => {
    setLoading(true)
    const url = `/api/news/categories`
    axios
      .get(url, {
        method: 'GET'
      })
      .then(res => {
        setCategories(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError('There was an error fetching News categories')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(fetchNews, [selectedCategory])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="News"
      page
    >
      <News
        news={news}
        categories={categories}
        newsLoading={newsLoading}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </BlockWrapper>
  )
}

export default NewsContainer
