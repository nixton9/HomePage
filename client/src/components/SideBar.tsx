import React from 'react'
import Tooltip from 'react-tooltip-lite'
import { SideBarStyles } from '../styles/SideBarStyles'
import {
  FiTv,
  FiHome,
  FiSettings,
  FiMonitor,
  FiImage,
  FiTrello,
  FiFilm,
  FiActivity
} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { settingsModalState } from '../state/atoms'

export const SideBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(settingsModalState)

  return (
    <SideBarStyles className="nav">
      <div className="nav__items home">
        <div className="nav__items__single-item">
          <NavLink
            exact
            to="/"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="Home" direction={'up'} arrow={false}>
              <FiHome />
            </Tooltip>
          </NavLink>
        </div>
      </div>
      <div className="nav__items main">
        <div className="nav__items__single-item">
          <NavLink
            to="/dribbble"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="Dribbble" direction={'up'} arrow={false}>
              <FiImage />
            </Tooltip>
          </NavLink>
        </div>
        <div className="nav__items__single-item">
          <NavLink
            to="/news"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="News" direction={'up'} arrow={false}>
              <FiTrello />
            </Tooltip>
          </NavLink>
        </div>
        <div className="nav__items__single-item">
          <NavLink
            to="/hackernews"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="Hacker News" direction={'up'} arrow={false}>
              <FiMonitor />
            </Tooltip>
          </NavLink>
        </div>
        <div className="nav__items__single-item">
          <NavLink
            to="/movies"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="Movies" direction={'up'} arrow={false}>
              <FiFilm />
            </Tooltip>
          </NavLink>
        </div>
        <div className="nav__items__single-item">
          <NavLink
            to="/tvshows"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="Tv Shows" direction={'up'} arrow={false}>
              <FiTv />
            </Tooltip>
          </NavLink>
        </div>
        <div className="nav__items__single-item">
          <NavLink
            to="/stocks"
            className="enlighten-on-hover"
            activeClassName="active"
          >
            <Tooltip content="Stocks" direction={'up'} arrow={false}>
              <FiActivity />
            </Tooltip>
          </NavLink>
        </div>
      </div>
      <div
        className={
          isModalOpen
            ? 'nav__items__single-item enlighten-on-hover active'
            : 'nav__items__single-item enlighten-on-hover'
        }
        onClick={() => setIsModalOpen(true)}
      >
        <Tooltip content="Settings" direction={'up'} arrow={false}>
          <FiSettings />
        </Tooltip>
      </div>
    </SideBarStyles>
  )
}
