import styled from 'styled-components'
import { theme, device } from './theme'

export const BlockStyles = styled.div`
  width: 100%;
  min-height: inherit;
  &.no-minHeight {
    min-height: 0;
    .block {
      min-height: 0;
    }
  }

  .page {
    padding-top: ${theme.spacingM};
    padding-right: ${theme.spacingS};
    padding-bottom: ${theme.spacingXS};
    padding-left: ${theme.spacingL};
    max-height: 100vh;

    @media ${device.laptopL} {
      padding-left: ${theme.spacingXS};
      padding-right: ${theme.spacingXS};
    }

    @media ${device.tablet} {
      padding-left: ${theme.spacingXS};
    }

    @media ${device.mobile} {
      padding-top: 5rem;
    }
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

  .nodata {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 200;
    font-size: 1rem;
    color: ${theme.white};
  }
`
