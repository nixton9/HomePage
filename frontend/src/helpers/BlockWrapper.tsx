import React from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { BlockStyles } from '../styles/BlockStyles'
import { MainTitle } from '../styles/MainTitle'

interface BlockWrapperProps {
  isLoading: boolean
  hasError: boolean
  error?: string
  children: React.ReactNode
  name: string
  page?: boolean
  noMinHeight?: boolean
}

export const BlockWrapper: React.FC<BlockWrapperProps> = ({
  isLoading,
  hasError,
  error,
  children,
  name,
  page,
  noMinHeight
}) => {
  return (
    <BlockStyles className={noMinHeight ? 'no-minHeight' : ''}>
      <div className={page ? 'page' : 'block'}>
        {page && <MainTitle>{name}</MainTitle>}
        {hasError ? (
          <div className="error">
            <p>{error}</p>
          </div>
        ) : isLoading ? (
          <div className="loading">
            <LoadingSpinner />
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </BlockStyles>
  )
}
