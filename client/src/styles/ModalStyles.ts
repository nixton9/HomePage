import styled from 'styled-components'
import { theme, device } from './theme'

export const ModalStyles = styled.div`
  display: none;
  &.open {
    display: block;

    .modal {
      animation: showModal 0.3s;
      animation-fill-mode: forwards;
    }
  }

  .modal {
    position: fixed;
    top: 50%;
    width: 45rem;
    max-width: 85%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 3rem;
    background-color: ${theme.black};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.mainShadow};
    z-index: 11;
    transform-origin: center center;

    @media ${device.mobile} {
      padding: 2rem;
    }

    .modal__title {
      font-size: 1.6rem;
      font-weight: ${theme.fontBold};
      color: ${theme.white};

      @media ${device.mobile} {
        font-size: 1.3rem;
      }
    }

    .modal__content {
      margin-top: ${theme.spacingXS};
      text-align: center;

      @media ${device.mobile} {
        margin-top: 0.5rem;
      }

      input {
        width: 100%;
        border-radius: ${theme.bigBorderRadius};
        border: none;
        background: ${theme.darkGrey};
        height: 4rem;
        font-size: 1rem;
        color: ${theme.white};
        margin: ${theme.spacingXS} auto;
        padding: 0 2rem;
        width: 90%;

        @media ${device.mobile} {
          width: 100%;
          height: 3.7rem;
          font-size: 0.9rem;
          padding: 0 ${theme.spacingXS};
          margin: 1.2rem auto;
        }
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        height: 1.4rem;
        cursor: pointer;
        padding: 0;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2rem;
        height: 2rem;
        background: ${theme.lighterGrey};
        cursor: pointer;
        border-radius: 50%;
      }

      button {
        display: block;
        margin: ${theme.spacingXS} auto 0 auto;
        background-color: ${theme.lighterGrey};
        color: ${theme.white};
        font-weight: ${theme.fontExtraBold};
        border: none;
        border-radius: ${theme.bigBorderRadius};
        height: 4rem;
        width: 10rem;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.4s ease;

        @media ${device.mobile} {
          height: 3.7rem;
          font-size: 0.9rem;
          margin-top: 1.2rem;
        }

        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }

  .modal-overlay  {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  @keyframes showModal {
    0% {
      transform: scale(0.7) translateY(-50%);
    }
    45% {
      transform: scale(1.05) translateY(-50%);
    }
    80% {
      transform: scale(0.95) translateY(-50%);
    }
    100% {
      transform: scale(1) translateY(-50%);
    }
  }
`
