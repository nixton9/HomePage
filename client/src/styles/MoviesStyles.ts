import styled from 'styled-components'
import { theme, device } from './theme'

export const MoviesStyles = styled.div`
  padding-left: ${theme.spacingS};

  @media ${device.mobile} {
    padding-left: 0;
  }

  .buttons {
    margin-top: ${theme.spacingS};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.mobile} {
      margin-top: 1rem;
    }

    select {
      font-size: 1.2rem;

      @media ${device.mobile} {
        font-size: 1rem;
      }
    }

    button {
      border: none;
      background: none;
      font-size: 1.2rem;
      font-weight: ${theme.fontExtraBold};
      color: ${theme.white};
      cursor: pointer;
      filter: brightness(0.8);

      @media ${device.mobile} {
        font-size: 1rem;
      }

      &:disabled {
        cursor: unset;
        color: ${theme.lighterGrey};
      }

      &.next {
        margin-left: ${theme.spacingXS};
      }
    }
  }

  .movies {
    margin-top: ${theme.spacingS};
    height: 73vh;
    overflow-y: scroll;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${device.mobile} {
      margin-top: ${theme.spacingXS};
      height: 76vh;
    }

    .movie {
      width: 14.5rem;
      margin: 0 4rem 4rem 0;
      color: ${theme.white};
      cursor: pointer;

      @media ${device.mobile} {
        margin: 0 auto ${theme.spacingS} auto;
      }

      &__img {
        position: relative;
        height: 20rem;
        border-radius: ${theme.borderRadius};
        background-size: cover;
        background-position: center center;
        background-color: black;
        background-clip: content-box;
        overflow: hidden;
      }

      &__score {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: ${theme.bigBorderRadius};
        background-color: rgba(255, 255, 255, 0.16);
        font-weight: ${theme.fontExtraBold};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
      }

      &__meta {
        background-color: rgba(0, 0, 0, 0.9);
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

        &__intro {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: ${theme.fontExtraBold};
          font-size: 0.85rem;
          margin-right: 0.7rem;
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
        font-size: 1.15rem;
        text-align: center;
        margin-top: 1.2rem;
        line-height: 1.7rem;
      }

      &__genres {
        margin-top: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        span {
          font-size: 0.9rem;
          font-weight: ${theme.fontExtraBold};
          margin: 0.5rem 0.5rem 0 0.5rem;
        }
      }

      &:hover {
        .movie__meta {
          opacity: 1;
        }
      }
    }
  }
`
