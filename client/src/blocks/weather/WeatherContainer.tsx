import React, { useState, useEffect, useCallback } from 'react'
import { Weather } from './Weather'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { getCurrentDate } from '../../helpers/date'
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

  const fetchData = useCallback(
    (position: any) => {
      setLoading(true)
      const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${WEATHER_KEY}`
      axios
        .get(url)
        .then(res => {
          const dataObj = {
            city: res.data.name,
            type: res.data.weather[0].main,
            description: res.data.weather[0].description,
            temperature: res.data.main.temp,
            minTemperature: res.data.main.temp_min,
            maxTemperature: res.data.main.temp_max,
            icon: res.data.weather[0].icon
          }
          setData(dataObj)
          localStorage.setItem('weather', JSON.stringify(dataObj))
          localStorage.setItem('weather_stamp', getCurrentDate())
          setLoading(false)
          setError('')
        })
        .catch(err => {
          setError('There was an error fetching the Weather forecast')
        })
    },
    [WEATHER_KEY]
  )

  const getCurrentWeather = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchData)
    } else {
      setError('There was an error getting your current location')
    }
  }, [fetchData])

  useEffect(() => {
    if (
      localStorage.getItem('weather') &&
      localStorage.getItem('weather_stamp') === getCurrentDate()
    ) {
      // @ts-ignore
      setData(JSON.parse(localStorage.getItem('weather')))
      setLoading(false)
    } else {
      getCurrentWeather()
    }
  }, [getCurrentWeather])

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
        reload={getCurrentWeather}
      />
    </BlockWrapper>
  )
}

export default WeatherContainer
