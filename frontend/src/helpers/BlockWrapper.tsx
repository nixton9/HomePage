import React from 'react'

interface BlockWrapperProps {
  isLoading: boolean
  hasError: boolean
  error?: string
  children: React.ReactNode
  name: string
}

export const BlockWrapper: React.FC<BlockWrapperProps> = ({
  isLoading,
  hasError,
  error,
  children,
  name
}) => {
  return (
    <div className="block">
      {hasError ? (
        <div className="error">{error}</div>
      ) : isLoading ? (
        <div className="loading">Loading {name}...</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}
