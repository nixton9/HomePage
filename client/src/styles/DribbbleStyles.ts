import styled from 'styled-components'
import { theme, device } from './theme'

export const DribbbleStyles = styled.div`
  padding-left: ${theme.spacingS};

  @media ${device.mobile} {
    padding-left: 0;
  }

  .shots {
    margin-top: ${theme.spacingS};
    height: 73vh;
    overflow-y: scroll;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${device.mobile} {
      margin-top: ${theme.spacingXS};
      height: 69vh;
    }

    .shot {
      margin: 0 4rem 4rem 0;

      @media ${device.mobile} {
        margin: 0 auto 2.5rem auto;
      }

      &__img {
        position: relative;
        width: 23rem;
        height: 17rem;
        border-radius: ${theme.borderRadius};
        background-position: center center;
        background-size: cover;
        overflow: hidden;
        background-color: black;
        background-clip: content-box;

        @media ${device.desktop} {
          width: 20rem;
          height: 15rem;
        }

        @media ${device.laptopL} {
          width: 19rem;
          height: 14.5rem;
        }
      }

      &__title {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        min-height: 9rem;
        background: linear-gradient(transparent -30%, #2b2b2b);
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(-30%, transparent),
          to(#2b2b2b)
        );
        display: flex;
        align-items: flex-end;
        padding: 0 1.5rem 1.5rem 1.5rem;
        transition: all 0.4s ease;
        opacity: 0;

        h3 {
          font-size: 1.1rem;
          color: ${theme.white};
          font-weight: ${theme.fontRegular};
        }
      }

      &__author {
        display: flex;
        align-items: center;
        margin-top: 1.2rem;
        margin-left: 0.5rem;

        &__img {
          width: 1.7rem;
          height: 1.7rem;
          border-radius: ${theme.bigBorderRadius};
          background-position: center center;
          background-size: cover;
        }

        &__name {
          color: ${theme.white};
          font-weight: ${theme.fontBold};
          font-size: 0.9rem;
          margin-left: 0.8rem;
        }
      }

      &:hover {
        .shot__title  {
          opacity: 1;
        }
      }
    }
  }
`
