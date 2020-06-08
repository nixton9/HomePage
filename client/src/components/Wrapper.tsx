import React from 'react'
import { SideBar } from './SideBar'
import { WrapperStyles } from '../styles/WrapperStyles'
import { useRecoilState } from 'recoil'
import { backgroundState, backgroundOpacityState } from '../state/atoms'
import { Settings } from './Settings'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [background] = useRecoilState(backgroundState)
  const [bgOpacity] = useRecoilState(backgroundOpacityState)

  return (
    <WrapperStyles img={background} opacity={bgOpacity}>
      <div className="content">
        <SideBar />
        {children}
      </div>
      <Settings />
    </WrapperStyles>
  )
}

export default Wrapper
