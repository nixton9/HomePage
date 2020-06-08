import styled from 'styled-components'
import { theme } from './theme'

export const HackerNewsStyles = styled.div`
  padding-left: ${theme.spacingS};
  .news-list {
    margin-top: ${theme.spacingS};
    height: 80vh;
    overflow-y: scroll;

    .news {
      display: flex;
      align-items: center;
      margin-bottom: ${theme.spacingS};

      &__icon svg {
        font-size: 3rem;
        color: ${theme.hnOrange};
        display: block;
      }

      &__content {
        margin-left: 0.5rem;
        color: ${theme.white};

        &__title {
          font-size: 1.4rem;
          font-weight: ${theme.fontLight};
        }

        &__date {
          font-size: 0.75rem;
          font-weight: ${theme.fontExtraBold};
          margin-top: 0.25rem;
        }
      }
    }
  }
`
