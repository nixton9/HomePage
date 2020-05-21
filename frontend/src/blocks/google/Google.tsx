import React, { useState } from 'react'

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
    <div className="google-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search something ..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}
