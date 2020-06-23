import styled from 'styled-components'
import { theme, device } from './theme'

export const WebsitesStyles = styled.div`
  margin-top: ${theme.spacingS};

  .block-overflow {
    height: 24.5rem;
  }

  @media ${device.mobile} {
    .block-overflow {
      height: 21rem;
    }
  }

  .websites {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 3rem 2rem;
    grid-auto-rows: minmax(min-content, max-content);
    height: 25rem;
    overflow-y: scroll;
    padding-top: 10px;

    .website {
      position: relative;

      &__img {
        position: relative;
        width: 4.5rem;
        height: 4.5rem;
        margin: 0 auto;
        background-color: ${theme.white};
        border-radius: ${theme.borderRadius};

        img {
          width: 60%;
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &__name {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        margin-top: 1rem;
      }

      &__delete {
        position: absolute;
        top: -5px;
        right: 20px;
        background: #dcdcdc;
        border-radius: 50px;
        border: none;
        width: 1.1rem;
        height: 1.1rem;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;

        svg {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          margin: 0 auto;
          display: block;
          transform: translateY(-50%);
          color: ${theme.black};
          font-size: 0.7rem;
        }
      }

      &:hover {
        .website__delete {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    @media ${device.mobile} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 2rem 2rem;

      .website__img {
        width: 3.5rem;
        height: 3.5rem;
      }
      .website__name {
        font-size: 0.9rem;
      }
    }
  }
`
