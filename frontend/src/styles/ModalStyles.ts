import styled from 'styled-components'
import { theme } from './theme'

export const ModalStyles = styled.div`
  display: none;
  &.open {
    display: block;
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
    transform: translateY(-50%);
    background-color: ${theme.black};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.mainShadow};
    z-index: 11;

    .modal__title {
      font-size: 1.6rem;
      font-weight: ${theme.fontBold};
      color: ${theme.white};
    }

    .modal__content {
      margin-top: ${theme.spacingXS};
      text-align: center;

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
`
