export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const extractEmailInfo = str => {
  const string = str
    .replace(/"/g, '')
    .replace(/</g, '')
    .replace(/>/g, '')
  const stringArr = string.split(' ')
  const nameArr: string[] = []
  const emailArr: string[] = []
  stringArr.forEach(s => {
    if (!s.includes('@')) {
      nameArr.push(s)
    } else {
      emailArr.push(s)
    }
  })
  if (nameArr.length === 0) {
    nameArr.push(emailArr[0].split('@')[0])
  }
  return {
    name: nameArr.join(' '),
    email: emailArr.join(' ')
  }
}

export const removeEmojisFromString = str => {
  return str.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  )
}

export const formatGithubReason = str => {
  if (str.includes('_')) {
    return capitalize(str.replace('_', ' '))
  }
  return capitalize(str)
}

export const calculatePercentage = (val1, val2) => {
  const percentage =
    Math.round(100 * Math.abs((val1 - val2) / ((val1 + val2) / 2)) * 10) / 10
  return val1 > val2 ? -percentage : percentage
}
