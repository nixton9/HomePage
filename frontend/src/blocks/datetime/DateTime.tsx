import React from 'react'
import { DateTimeStyles } from '../../styles/DateTimeStyles'

interface DateTimeProps {
  date: string
  period: string
  time: string
}

export const DateTime: React.FC<DateTimeProps> = ({ date, time, period }) => {
  return (
    <DateTimeStyles className="date-time">
      <h2 className="time">
        {time} <span className="period">{period}</span>
      </h2>
      <h2 className="date">{date}</h2>
    </DateTimeStyles>
  )
}
