import React, { useState } from 'react'
import { GoogleStyles } from '../../styles/GoogleStyles'
import { FaGoogle } from 'react-icons/fa'

interface GoogleProps {
  submitSearch: (query: string) => void
}

export const Google: React.FC<GoogleProps> = ({ submitSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    submitSearch(query)
    setQuery('')
  }

  return (
    <GoogleStyles>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search on google"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <FaGoogle />
        </div>
      </form>
    </GoogleStyles>
  )
}
