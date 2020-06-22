import moment from 'moment'

export const getCurrentDate = () => moment().format('YYYY-MM-DD')

export const getCurrentDateToString = () => moment().format('dddd, D MMMM')

export const getCurrentTime = () => moment().format('hh:mm')

export const getCurrentPeriod = () => moment().format('a')

export const getDayAndMonth = date => moment(date).format('D/MM')

export const dateToString = (date, year = false) => {
  if (year) return moment(date).format('D MMMM YYYY')
  return moment(date).format('D MMMM')
}

export const getTimeFromNow = date =>
  moment
    .unix(date)
    .startOf('hour')
    .fromNow()

export const getDateForStocks = () => {
  const day = moment()
    .format('dddd')
    .toLowerCase()
  let daysToBeSubtracted = 8
  if (day === 'monday' || day === 'tuesday') {
    daysToBeSubtracted = 10
  } else if (day === 'sunday') {
    daysToBeSubtracted = 9
  }
  return moment()
    .subtract(daysToBeSubtracted, 'days')
    .format('YYYY-MM-DD')
}
