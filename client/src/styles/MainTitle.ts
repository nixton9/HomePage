import styled from 'styled-components'
import { theme, device } from './theme'

export const MainTitle = styled.h1`
  color: ${theme.white};
  font-size: 1.6rem;
  font-weight: ${theme.fontRegular};

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`
