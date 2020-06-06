import React from 'react'
import Tooltip from 'react-tooltip-lite'
import { SideBarStyles } from '../styles/SideBarStyles'
import { FiTv, FiHome, FiSettings, FiMonitor, FiImage } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { settingsModalState } from '../state/atoms'

export const SideBar: React.FC = () => {
  const setIsModalOpen = useSetRecoilState(settingsModalState)

  return (
    <SideBarStyles className="nav">
      <div className="nav__items home">
        <div className="nav__items__single-item">
          <Link to="/">
            <Tooltip content="Home" direction={'up'} arrow={false}>
              <FiHome />
            </Tooltip>
          </Link>
        </div>
      </div>
      <div className="nav__items main">
        <div className="nav__items__single-item">
          <Link to="/dribbble">
            <Tooltip content="Dribbble" direction={'up'} arrow={false}>
              <FiImage />
            </Tooltip>
          </Link>
        </div>
        <div className="nav__items__single-item">
          <Link to="/hackernews">
            <Tooltip content="Hacker News" direction={'up'} arrow={false}>
              <FiMonitor />
            </Tooltip>
          </Link>
        </div>
        <div className="nav__items__single-item">
          <Link to="/movies">
            <Tooltip content="Movies" direction={'up'} arrow={false}>
              <FiTv />
            </Tooltip>
          </Link>
        </div>
      </div>
      <div
        className="nav__items__single-item settings"
        onClick={() => setIsModalOpen(true)}
      >
        <Tooltip content="Settings" direction={'up'} arrow={false}>
          <FiSettings />
        </Tooltip>
      </div>
    </SideBarStyles>
  )
}
