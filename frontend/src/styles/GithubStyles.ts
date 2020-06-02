import styled from 'styled-components'
import { theme } from './theme'

export const GithubStyles = styled.div`
  .notifications {
    height: 90%;
    .notification__single {
      cursor: pointer;
      color: ${theme.white};
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;

      &__info {
        display: flex;
        align-items: flex-end;

        &__repo {
          font-weight: ${theme.fontExtraLight};
          font-size: 0.8rem;
          margin-right: 0.75rem;
        }

        &__reason {
          font-weight: ${theme.fontRegular};
          font-size: 0.5rem;
          padding: 0.12rem 0.4rem;
          color: ${theme.black};
          background-color: ${theme.white};
          border-radius: ${theme.bigBorderRadius};
        }
      }

      &__title {
        font-weight: ${theme.fontBold};
        font-size: 0.75rem;
        margin-top: 0.4rem;
      }

      &__date {
        text-align: right;
        padding: 0 1rem 0 3rem;
        font-weight: ${theme.fontExtraBold};
      }

      &.unread {
        .notification__single__info__repo,
        .notification__single__info__reason {
          font-weight: ${theme.fontBold};
        }

        .notification__single__title,
        .notification__single__date {
          font-weight: ${theme.fontBlack};
        }
      }
    }
  }
`
