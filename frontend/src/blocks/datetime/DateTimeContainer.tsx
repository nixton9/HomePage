import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { DateTime } from './DateTime'
import {
  getCurrentTime,
  getCurrentDateToString,
  getCurrentPeriod
} from '../../helpers/date'

const DateTimeContainer: React.FC = () => {
  const [date] = useState(getCurrentDateToString())
  const [period, setPeriod] = useState(getCurrentPeriod())
  const [time, setTime] = useState(getCurrentTime())

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getCurrentTime())
      setPeriod(getCurrentPeriod())
    }, 30000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <BlockWrapper
      isLoading={false}
      hasError={false}
      error={''}
      name="Date & Time"
    >
      <DateTime date={date} time={time} period={period} />
    </BlockWrapper>
  )
}

export default DateTimeContainer
