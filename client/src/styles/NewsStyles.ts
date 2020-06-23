import styled from 'styled-components'
import { theme, device } from './theme'

export const NewsStyles = styled.div`
  padding-left: ${theme.spacingS};

  @media ${device.mobile} {
    padding-left: 0;
  }

  .articles {
    margin-top: ${theme.spacingS};
    height: 73vh;
    overflow-y: scroll;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${device.mobile} {
      margin-top: ${theme.spacingXS};
      height: 72vh;

      a {
        margin: 0 auto;
      }
    }

    .article {
      width: 23rem;
      margin: 0 4rem 4rem 0;

      @media ${device.mobile} {
        width: 20rem;
        margin: 0 0 3rem 0;
      }

      &__img {
        position: relative;
        height: 14rem;
        border-radius: ${theme.borderRadius};
        background-size: cover;
        background-position: center center;
        background-color: black;
        background-clip: content-box;
        overflow: hidden;
      }

      &__meta {
        background-color: rgba(0, 0, 0, 0.9);
        color: ${theme.white};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: ${theme.spacingXS};
        padding-right: 0.8rem;
        z-index: 1;
        opacity: 0;
        transition: all 0.4s ease;

        &__date {
          font-weight: ${theme.fontExtraBold};
          font-size: 0.85rem;
        }

        &__desc {
          margin-top: ${theme.spacingXS};
          overflow-y: scroll;
          height: 87%;
          padding-right: 0.7rem;

          p {
            font-weight: ${theme.fontRegular};
            font-size: 0.8rem;
            line-height: 1.7rem;
          }
        }
      }

      &__title {
        font-weight: ${theme.fontRegular};
        color: ${theme.white};
        font-size: 1.05rem;
        line-height: 1.7rem;
        margin: 1rem auto 0 auto;
        width: 95%;
      }

      &:hover {
        .article__meta {
          opacity: 1;
        }
      }
    }
  }
`
