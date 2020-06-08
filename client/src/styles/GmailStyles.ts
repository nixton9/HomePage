import styled from 'styled-components'
import { theme } from './theme'

export const GmailStyles = styled.div`
  .emails {
    height: 90%;
    .email__single {
      cursor: pointer;
      color: ${theme.white};
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;

      &__from {
        display: flex;
        align-items: flex-end;

        &__name {
          font-weight: ${theme.fontBold};
          font-size: 0.8rem;
          margin-right: 0.75rem;
        }

        &__email {
          font-weight: ${theme.fontRegular};
          font-size: 0.65rem;
        }
      }

      &__text {
        margin-top: 0.5rem;

        p {
          font-weight: ${theme.fontExtraLight};
          font-size: 0.7rem;
          line-height: 1.1rem;

          strong {
            font-weight: ${theme.fontRegular};
          }
        }
      }

      &__date {
        text-align: right;
        padding: 0 1rem 0 3rem;
        font-weight: ${theme.fontExtraBold};
      }

      &.unread {
        .email__single__from__name {
          font-weight: ${theme.fontBlack};
        }

        .email__single__from__email {
          font-weight: ${theme.fontExtraBold};
        }

        .email__single__text {
          p {
            font-weight: ${theme.fontRegular};

            strong {
              font-weight: ${theme.fontExtraBold};
            }
          }
        }
      }
    }
  }
`
