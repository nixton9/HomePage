// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
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
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    ''
  )
  const [categories] = useState<Category[] | []>([
    { value: '', name: 'All' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' }
  ])

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const fetchNews = () => {
    setNewsLoading(true)
    const url = selectedCategory
      ? `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=pt&category=${selectedCategory}&apiKey=${API_KEY}`
      : `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=pt&apiKey=${API_KEY}`
    console.log(url)
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
