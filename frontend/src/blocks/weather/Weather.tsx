import React from 'react'

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
    <div>
      <h1>{city}</h1>
      <p>{type}</p>
      <p>{description}</p>
      <p>{minTemperature}</p>
      <p>{maxTemperature}</p>
      <p>{temperature}</p>
      <img src={`./assets/icons/${icon}@2x.png`} alt={type} />
    </div>
  )
}
