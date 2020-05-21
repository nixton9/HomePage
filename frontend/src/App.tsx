import React from 'react'
import Main from './components/Main'
import { RecoilRoot } from 'recoil'
require('dotenv').config()

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

export default App
