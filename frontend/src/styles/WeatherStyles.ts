import styled from 'styled-components'
import { theme } from './theme'

export const WeatherStyles = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 0.75rem;

    svg {
      font-size: 6rem;
    }
  }

  .info {
    &__city {
      font-weight: ${theme.fontBold};
      font-size: 1.3rem;
      line-height: 2rem;
    }
    &__desc {
      font-weight: ${theme.fontLight};
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
    &__temp  {
      display: flex;

      p {
        font-size: 0.8rem;
        line-height: 1.4rem;
        font-weight: ${theme.fontExtraLight};
        margin-right: 0.8rem;

        strong {
          font-weight: ${theme.fontRegular};
        }
      }
    }
  }
`
