import React from 'react'
import { SideBarStyles } from '../styles/SideBarStyles'
import {
  FaHome,
  FaDribbble,
  FaHackerNewsSquare,
  FaPlay,
  FaRegSun
} from 'react-icons/fa'
import {
  TiHomeOutline,
  TiSocialDribbble,
  TiDeviceLaptop,
  TiCogOutline,
  TiFilm
} from 'react-icons/ti'
import { FiTv, FiHome, FiSettings, FiMonitor, FiImage } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { settingsModalState } from '../state/atoms'

export const SideBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(settingsModalState)

  const openModal = () => {}

  return (
    <SideBarStyles className="nav">
      <div className="nav__items home">
        <div className="nav__items__single-item">
          <Link to="/">
            <FiHome />
          </Link>
        </div>
      </div>
      <div className="nav__items main">
        <div className="nav__items__single-item">
          <Link to="/dribbble">
            <FiImage />
          </Link>
        </div>
        <div className="nav__items__single-item">
          <Link to="/hackernews">
            <FiMonitor />
          </Link>
        </div>
        <div className="nav__items__single-item">
          <Link to="/movies">
            <FiTv />
          </Link>
        </div>
      </div>
      <div
        className="nav__items__single-item settings"
        onClick={() => setIsModalOpen(true)}
      >
        <FiSettings />
      </div>
    </SideBarStyles>
  )
}
