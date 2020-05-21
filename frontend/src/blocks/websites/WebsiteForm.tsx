import React, { useState } from 'react'

interface WebsiteFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  addWebsite: (url: string, name: string) => void
}

export const WebsiteForm: React.FC<WebsiteFormProps> = ({
  setShowForm,
  addWebsite
}) => {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addWebsite(url, name)
    setShowForm(false)
    setUrl('')
  }

  const handleCancel = e => {
    e.preventDefault()
    setShowForm(false)
    setUrl('')
  }

  return (
    <div className="websites-form">
      Add a website
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
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}
