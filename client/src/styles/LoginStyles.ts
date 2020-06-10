import styled from 'styled-components'
import { theme } from './theme'

export const LoginStyles = styled.div`
  background-color: ${theme.black};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    position: absolute;
    width: 35rem;
    max-width: 85%;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 3rem;
    text-align: center;
    transform: translateY(-50%);
    background-color: ${theme.black};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.mainShadow};

    &__title {
      font-size: 1.6rem;
      font-weight: ${theme.fontBold};
      color: ${theme.white};
    }

    form {
      margin-top: ${theme.spacingXS};

      input {
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
`
