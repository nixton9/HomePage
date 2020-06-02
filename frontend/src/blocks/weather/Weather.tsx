import React from 'react'
import { WeatherIcon } from './WeatherIcon'
import { WeatherStyles } from '../../styles/WeatherStyles'
import { capitalize } from '../../helpers/random'

interface WeatherProps {
  city: string
  type: string
  description: string
  temperature: number
  minTemperature: number
  maxTemperature: number
  icon: string
}

export const Weather: React.FC<WeatherProps> = props => {
  const {
    city,
    type,
    description,
    minTemperature,
    maxTemperature,
    icon,
    temperature
  } = props

  return (
    <WeatherStyles>
      <div className="icon">
        <WeatherIcon iconCode={icon} />
      </div>
      <div className="info">
        <h2 className="info__city">{city}</h2>
        <h3 className="info__desc">{capitalize(description)}</h3>
        <div className="info__temp">
          <p>
            <strong>Temp</strong> {Math.round(maxTemperature)}C
          </p>
          <p>
            <strong>Max</strong> {Math.round(minTemperature)}C
          </p>
          <p>
            <strong>Min</strong> {Math.round(temperature)}C
          </p>
        </div>
      </div>
    </WeatherStyles>
  )
}
