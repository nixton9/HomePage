import styled from 'styled-components'
import { theme } from './theme'

export const SeeMoreStyles = styled.div`
  margin-top: 3rem;
  font-weight: ${theme.fontBold};
  font-size: 0.65rem;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      font-size: 1.2rem;
      margin-left: 0.5rem;
      transition: all 0.4s ease;
    }

    &:hover svg {
      transform: translateX(10px);
    }
  }
`
