import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Dribbble } from './Dribbble'
import { Category } from '../../components/Categories'
import axios from 'axios'

export interface Shot {
  authorName: string
  authorUrl: string
  authorImage: string
  title: string
  url: string
  image: string
}

const DribbbleContainer: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [shotsLoading, setShotsLoading] = useState(true)
  const [error, setError] = useState('')
  const [shots, setShots] = useState<Shot[] | []>([])
  const [categories, setCategories] = useState<Category[] | []>([])
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  )

  const fetchData = () => {
    setShotsLoading(true)
    const url = selectedCategory
      ? `/api/dribbble/${selectedCategory}`
      : `/api/dribbble`

    axios
      .get(url, {
        method: 'GET'
      })
      .then(res => {
        console.log(res.data)
        setShots(res.data)
        setShotsLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Dribbble shots')
        setShotsLoading(false)
      })
  }

  const fetchCategories = () => {
    setLoading(true)
    const url = `/api/dribbble/categories`
    axios
      .get(url, {
        method: 'GET'
      })
      .then(res => {
        setCategories(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError('There was an error fetching Dribbble categories')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(fetchData, [selectedCategory])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Dribbble"
      page
    >
      <Dribbble
        shots={shots}
        categories={categories}
        shotsLoading={shotsLoading}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </BlockWrapper>
  )
}

export default DribbbleContainer
