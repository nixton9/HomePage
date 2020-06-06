import React from 'react'
import { LoadingSpinnerStyles } from '../styles/LoadingSpinnerStyles'

export const LoadingSpinner: React.FC = () => (
  <LoadingSpinnerStyles>
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </LoadingSpinnerStyles>
)
