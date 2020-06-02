import React from 'react'
import { BlockStyles } from '../styles/BlockStyles'
import { MainTitle } from '../styles/MainTitle'

interface BlockWrapperProps {
  isLoading: boolean
  hasError: boolean
  error?: string
  children: React.ReactNode
  name: string
  page?: boolean
}

export const BlockWrapper: React.FC<BlockWrapperProps> = ({
  isLoading,
  hasError,
  error,
  children,
  name,
  page
}) => {
  return (
    <BlockStyles>
      <div className={page ? 'page' : 'block'}>
        {page && <MainTitle>{name}</MainTitle>}
        {hasError ? (
          <div className="error">{error}</div>
        ) : isLoading ? (
          <div className="loading">Loading {name}...</div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </BlockStyles>
  )
}
