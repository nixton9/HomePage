import React from 'react'
import Tooltip from 'react-tooltip-lite'
import { WeatherIcon } from './WeatherIcon'
import { WeatherStyles } from '../../styles/WeatherStyles'
import { capitalize } from '../../helpers/random'
import { FaSyncAlt } from 'react-icons/fa'

interface WeatherProps {
  city: string
  type: string
  description: string
  temperature: number
  minTemperature: number
  maxTemperature: number
  icon: string
  reload: () => void
}

export const Weather: React.FC<WeatherProps> = props => {
  const {
    city,
    description,
    minTemperature,
    maxTemperature,
    icon,
    temperature,
    reload
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
            <strong>Temp</strong> {Math.round(temperature)}C
          </p>
          <p>
            <strong>Max</strong> {Math.round(maxTemperature)}C
          </p>
          <p>
            <strong>Min</strong> {Math.round(minTemperature)}C
          </p>
        </div>
      </div>
      <span className="reload rotate-on-hover" onClick={reload}>
        <Tooltip content="Reload" direction={'up'} arrow={false}>
          <FaSyncAlt />
        </Tooltip>
      </span>
    </WeatherStyles>
  )
}
