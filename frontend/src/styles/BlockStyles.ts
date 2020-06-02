import styled from 'styled-components'
import { theme } from './theme'

export const BlockStyles = styled.div`
  width: 100%;

  .page {
    padding: ${theme.spacingM} ${theme.spacingS} ${theme.spacingXS}
      ${theme.spacingL};
    max-height: 100vh;
  }
`
