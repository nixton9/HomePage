import React from 'react'
import WeatherContainer from '../blocks/weather/WeatherContainer'
import EmailContainer from '../blocks/gmail/EmailContainer'
import InstagramContainer from '../blocks/instagram/InstagramContainer'
import TodoistContainer from '../blocks/todoist/TodoistContainer'
import GithubContainer from '../blocks/github/GithubContainer'
import MoviesContainer from '../blocks/movies/MoviesContainer'
import GoogleContainer from '../blocks/google/GoogleContainer'
import WebsitesContainer from '../blocks/websites/WebsitesContainer'
import DribbbleContainer from '../blocks/dribbble/DribbbleContainer'
import HackerNewsContainer from '../blocks/hackernews/HackerNewsContainer'
import Settings from './Settings'
import { BackgroundImage } from '../styles/BackgroundImage'
import { RecoilRoot, useRecoilState } from 'recoil'
import { usernameState, backgroundState } from '../state/atoms'
require('dotenv').config()

const Main: React.FC = () => {
  const [username] = useRecoilState(usernameState)
  const [background] = useRecoilState(backgroundState)

  return (
    <>
      <BackgroundImage img={background}>
        <h1>Homepage - {username}</h1>
        <Settings />
        <TodoistContainer />
      </BackgroundImage>
    </>
  )
}

export default Main
