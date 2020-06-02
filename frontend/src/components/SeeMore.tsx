import React from 'react'
import { SeeMoreStyles } from '../styles/SeeMoreStyles'
import { TiArrowRight } from 'react-icons/ti'

interface SeeMoreProps {
  link: string
}

export const SeeMore = ({ link }) => (
  <SeeMoreStyles>
    <a href={link} target="_blank" rel="noopener noreferrer">
      See more <TiArrowRight />
    </a>
  </SeeMoreStyles>
)
