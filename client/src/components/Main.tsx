import React from 'react'
import WeatherContainer from '../blocks/weather/WeatherContainer'
import GoogleContainer from '../blocks/google/GoogleContainer'
import WebsitesContainer from '../blocks/websites/WebsitesContainer'
import DateTimeContainer from '../blocks/datetime/DateTimeContainer'
import { MainTabs } from './MainTabs'
import { MainStyles } from '../styles/MainStyles'
import { MainTitle } from '../styles/MainTitle'
import { useRecoilState } from 'recoil'
import { usernameState } from '../state/atoms'
require('dotenv').config()

const Main: React.FC = () => {
  const [username] = useRecoilState(usernameState)

  return (
    <MainStyles>
      <MainTitle>Welcome {username}</MainTitle>
      <div className="main__grid date-weather">
        <div className="main__grid__item">
          <DateTimeContainer />
        </div>
        <div className="main__grid__item weather-item">
          <WeatherContainer />
        </div>
      </div>
      <div className="main__grid tabs-websites">
        <div className="main__grid__item">
          <MainTabs />
        </div>
        <div className="main__grid__item">
          <GoogleContainer />
          <WebsitesContainer />
        </div>
      </div>
    </MainStyles>
  )
}

export default Main
