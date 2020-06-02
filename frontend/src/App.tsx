import React from 'react'
import Wrapper from './components/Wrapper'
import Main from './components/Main'
import DribbbleContainer from './blocks/dribbble/DribbbleContainer'
import HackerNewsContainer from './blocks/hackernews/HackerNewsContainer'
import MoviesContainer from './blocks/movies/MoviesContainer'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
require('dotenv').config()

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Wrapper>
          <Route exact path="/dribbble">
            <DribbbleContainer />
          </Route>
          <Route exact path="/hackernews">
            <HackerNewsContainer />
          </Route>
          <Route exact path="/movies">
            <MoviesContainer />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Wrapper>
      </Router>
    </RecoilRoot>
  )
}

export default App
