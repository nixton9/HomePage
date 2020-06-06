import styled from 'styled-components'
import { theme } from './theme'

export const BlockStyles = styled.div`
  width: 100%;
  height: 100%;
  min-height: inherit;

  .page {
    padding: ${theme.spacingM} ${theme.spacingS} ${theme.spacingXS}
      ${theme.spacingL};
    max-height: 100vh;
  }

  .block {
    position: relative;
    height: 100%;
    min-height: inherit;

    .login {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      top: 8rem;

      button {
        border: none;
        background: none;
        color: ${theme.white};
        font-weight: ${theme.fontExtraBold};
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }

  .loading,
  .error {
    width: 100%;
    height: 100%;
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page .loading,
  .page .error {
    min-height: 45rem;
  }

  .error p {
    font-size: 0.9rem;
    font-weight: ${theme.fontRegular};
    color: ${theme.white};
  }
`
