import styled from 'styled-components'
import { theme } from './theme'

export const MainStyles = styled.div`
  width: 100%;
  padding: ${theme.spacingM} ${theme.spacingL} ${theme.spacingXS}
    ${theme.spacingL};
  color: ${theme.white};

  .main__grid {
    display: grid;
    grid-template-columns: 55% 45%;
    margin-top: ${theme.spacingS};

    &__item {
      max-width: 45rem;
    }
  }
`
