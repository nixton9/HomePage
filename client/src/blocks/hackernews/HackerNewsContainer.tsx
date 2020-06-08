// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
import { HackerNews } from './HackerNews'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import axios from 'axios'

export interface News {
  id: number
  time: number
  title: string
  url: string
}

const HackerNewsContainer: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [newsIds, setNewsIds] = useState([])
  const [news, setNews] = useState<News[] | []>([])

  const getNewsIds = () => {
    setLoading(true)
    const url =
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    axios.get(url).then(
      res => {
        const newsIds = res.data
        setNewsIds(newsIds.slice(0, 50))
        setLoading(false)
        setError('')
      },
      err => {
        setError('Error getting news from HackerNews')
        setLoading(false)
        setMessagesIds([])
      }
    )
  }

  const fetchtNews = useCallback(() => {
    setLoading(true)
    const allNews: any = []
    newsIds.forEach(id => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      axios.get(url).then(
        res => {
          const singleNews: News = {
            id: res.data.id,
            time: res.data.time,
            title: res.data.title,
            url: res.data.url
          }
          setNews(prevState => [...prevState, singleNews])
          allNews.push(singleNews)
        },
        err => {
          console.log('Error getting single news')
        }
      )
    })
    setLoading(false)
  }, [newsIds])

  useEffect(() => {
    getNewsIds()
  }, [])

  useEffect(() => {
    if (newsIds.length > 0) {
      fetchtNews()
    }
  }, [newsIds, fetchtNews])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="HackerNews"
      page
    >
      <HackerNews news={news} />
    </BlockWrapper>
  )
}

export default HackerNewsContainer
