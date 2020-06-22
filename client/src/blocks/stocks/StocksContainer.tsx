// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Stocks } from './Stocks'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { getDateForStocks, dateToString } from '../../helpers/date'
import Swal from 'sweetalert2'
import axios from 'axios'

export interface Index {
  title: string
  data: { date: string; close: number; high: number; low: number }[] | []
  error?: string
}

export interface Company {
  name: string
  ticker: string
  bought: number
  lastWeekPrice: number | null
  currPrice: number | null
  error?: string
}

const StocksContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [companies, setCompanies] = useState<Company>([])
  const [indexes, setIndexes] = useState<Index>({
    SPY: {
      title: 'S&P 500',
      data: []
    },
    QQQ: { title: 'NASDAQ', data: [] }
  })
  const KEY = process.env.REACT_APP_TIINGO_KEY

  const fetchData = (ticker, index) => {
    setLoading(true)
    const url = `/api/stocks/indexes/${ticker}/${getDateForStocks()}/${KEY}`
    axios.get(url).then(
      res => {
        const data = []
        res.data.forEach(item => {
          let dayData = {
            day: dateToString(item.date),
            high: item.high,
            low: item.low,
            close: item.close
          }
          data.push(dayData)
        })
        if (index) {
          const index = indexes[ticker]
          index.data = data
          setIndexes(prevIndexes => ({ ...prevIndexes, [ticker]: index }))
        } else {
          const company = companies.find(comp => comp.ticker === ticker)
          company.lastWeekPrice = data[0].close
          company.currPrice = data[data.length - 1].close
          setCompanies(prevCompanies => [
            ...prevCompanies.filter(comp => comp.ticker !== ticker),
            company
          ])
        }
        setLoading(false)
      },
      err => {
        if (index) {
          const index = indexes[ticker]
          index.error = err.response.data
          setIndexes(prevIndexes => ({ ...prevIndexes, [ticker]: index }))
        } else {
          const company = companies.find(comp => comp.ticker === ticker)
          company.error = err.response.data
          setCompanies(prevCompanies => [
            ...prevCompanies.filter(comp => comp.ticker !== ticker),
            company
          ])
        }
        setLoading(false)
      }
    )
  }

  const addCompany = (company, ticker, price) => {
    const newCompany = {
      name: company,
      ticker: ticker,
      bought: price
    }
    setCompanies([...companies, newCompany])
  }

  const deleteCompany = ticker => {
    Swal.fire({
      title: 'Delete company?',
      text: 'You will be permanently deleting this company!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        const newCompanies = companies.filter(
          company => company.ticker !== ticker
        )
        setCompanies(newCompanies)
      }
    })
  }

  useEffect(() => {
    if (localStorage.getItem('companies')) {
      // @ts-ignore
      setCompanies(JSON.parse(localStorage.getItem('companies')))
    }
  }, [])

  useEffect(() => {
    Object.entries(indexes).forEach(([key]) => fetchData(key, true))
    companies.forEach(comp => fetchData(comp.ticker))
    // eslint-disable-next-line
  }, [companies.length])

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companies))
  }, [companies])

  useEffect(() => {
    if (
      companies.every(comp => comp.error) &&
      Object.values(indexes).every(index => index.error)
    ) {
      setError('Error fetching stocks and indexes data')
    }
  }, [indexes, companies])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Stocks"
      page
    >
      <Stocks
        indexes={indexes}
        companies={companies}
        addCompany={addCompany}
        deleteCompany={deleteCompany}
      />
    </BlockWrapper>
  )
}

export default StocksContainer
