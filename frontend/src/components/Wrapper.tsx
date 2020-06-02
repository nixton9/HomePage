import React from 'react'
import { SideBar } from './SideBar'
import { WrapperStyles } from '../styles/WrapperStyles'
import { useRecoilState } from 'recoil'
import { backgroundState } from '../state/atoms'
import { Settings } from './Settings'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [background] = useRecoilState(backgroundState)

  return (
    <WrapperStyles img={background}>
      <div className="content">
        <SideBar />
        {children}
      </div>
      <Settings />
    </WrapperStyles>
  )
}

export default Wrapper
