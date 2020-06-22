import styled from 'styled-components'
import { theme, device } from './theme'

export const HackerNewsStyles = styled.div`
  padding-left: ${theme.spacingS};

  @media ${device.mobile} {
    padding-left: 0;
  }

  .news-list {
    margin-top: ${theme.spacingS};
    height: 80vh;
    overflow-y: scroll;

    @media ${device.mobile} {
      margin-top: ${theme.spacingXS};
    }

    .news {
      display: flex;
      align-items: center;
      margin-bottom: ${theme.spacingS};

      &__icon svg {
        font-size: 3rem;
        color: ${theme.hnOrange};
        display: block;

        @media ${device.mobile} {
          font-size: 2rem;
        }
      }

      &__content {
        margin-left: 0.5rem;
        color: ${theme.white};

        &__title {
          font-size: 1.4rem;
          font-weight: ${theme.fontLight};

          @media ${device.mobile} {
            font-size: 1.2rem;
          }
        }

        &__date {
          font-size: 0.75rem;
          font-weight: ${theme.fontExtraBold};
          margin-top: 0.25rem;

          @media ${device.mobile} {
            font-size: 0.65rem;
          }
        }
      }
    }
  }
`
