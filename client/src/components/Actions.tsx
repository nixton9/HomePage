import React from 'react'
import Tooltip from 'react-tooltip-lite'
import { ActionsStyles } from '../styles/ActionsStyles'
import { TiArrowRight } from 'react-icons/ti'
import { FaSignOutAlt, FaSyncAlt, FaPlus } from 'react-icons/fa'

interface ActionsProps {
  link?: string
  logout?: () => void
  reload?: () => void
  openModal?: () => void
}

export const Actions: React.FC<ActionsProps> = ({
  link,
  reload,
  logout,
  openModal
}) => (
  <ActionsStyles className="actions">
    <div className="left">
      {reload && (
        <span className="reload rotate-on-hover" onClick={reload}>
          <Tooltip content="Reload" direction={'up'} arrow={false}>
            <FaSyncAlt />
          </Tooltip>
        </span>
      )}
      {logout && (
        <span className="logout translate-right-on-hover" onClick={logout}>
          <Tooltip content="Log out" direction={'up'} arrow={false}>
            <FaSignOutAlt />
          </Tooltip>
        </span>
      )}
    </div>

    <div className="right">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="see-more"
        >
          See more <TiArrowRight />
        </a>
      )}
      {openModal && (
        <span className="openmodal rotate-on-hover" onClick={openModal}>
          <Tooltip content="Add" direction={'up'} arrow={false}>
            <FaPlus />
          </Tooltip>
        </span>
      )}
    </div>
  </ActionsStyles>
)
