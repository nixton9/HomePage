import React, { useState } from 'react'
import { Website } from './WebsitesContainer'
import { Modal } from '../../components/Modal'
import { Actions } from '../../components/Actions'
import { WebsitesStyles } from '../../styles/WebsitesStyles'
import { useRecoilState } from 'recoil'
import { websitesModalState } from '../../state/atoms'
import { FaTimes } from 'react-icons/fa'

interface WebsitesProps {
  websites: Website[] | []
  deleteWebsite: (id: string) => void
  addWebsite: (url: string, name: string) => void
}

export const Websites: React.FC<WebsitesProps> = ({
  websites,
  deleteWebsite,
  addWebsite
}) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(websitesModalState)
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addWebsite(url, name)
    setUrl('')
    setName('')
    setTimeout(() => setIsModalOpen(false), 200)
  }

  return (
    <>
      <WebsitesStyles>
        <div className="block-overflow">
          {websites.length > 0 ? (
            <div className="websites">
              {(websites as any).map(website => (
                <div
                  key={website.id}
                  className="website translate-top-on-hover"
                >
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="website__img">
                      <img src={website.icon} alt={website.name} />
                    </div>
                    <p className="website__name">{website.name}</p>
                  </a>
                  <button
                    className="website__delete"
                    onClick={() => deleteWebsite(website.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="nodata">There are no websites in here</div>
          )}
        </div>
        <Actions openModal={() => setIsModalOpen(true)} />
      </WebsitesStyles>
      <Modal
        open={isModalOpen}
        title={'Add Website'}
        closeModal={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name for the website"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL for the website"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <button>Add</button>
        </form>
      </Modal>
    </>
  )
}
