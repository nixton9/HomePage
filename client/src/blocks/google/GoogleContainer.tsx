import React from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Google } from './Google'

const GoogleContainer: React.FC = () => {
  const submitSearch = query => {
    window.open(`https://google.com/search?q=${query}`, '_blank')
  }

  return (
    <BlockWrapper
      isLoading={false}
      hasError={false}
      error={''}
      name="Google"
      noMinHeight
    >
      <Google submitSearch={submitSearch} />
    </BlockWrapper>
  )
}

export default GoogleContainer
