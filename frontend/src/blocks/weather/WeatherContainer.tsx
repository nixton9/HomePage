import React, { useState, useEffect } from 'react'
import { Weather } from './Weather'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import axios from 'axios'

const WeatherContainer: React.FC = () => {
  const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState({
    city: '',
    type: '',
    description: '',
    temperature: 0,
    minTemperature: 0,
    maxTemperature: 0,
    icon: ''
  })

  const fetchData = (position: any) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${WEATHER_KEY}`
    axios
      .get(url)
      .then(res => {
        setData({
          city: res.data.name,
          type: res.data.weather[0].main,
          description: res.data.weather[0].description,
          temperature: res.data.main.temp,
          minTemperature: res.data.main.temp_min,
          maxTemperature: res.data.main.temp_max,
          icon: res.data.weather[0].icon
        })
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching the Weather forecast')
      })
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchData)
    } else {
      setError('There was an error getting your current location')
    }
  }, [])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Weather"
    >
      <Weather
        city={data.city}
        type={data.type}
        description={data.description}
        temperature={data.temperature}
        minTemperature={data.minTemperature}
        maxTemperature={data.maxTemperature}
        icon={data.icon}
      />
    </BlockWrapper>
  )
}

export default WeatherContainer
