import styled from 'styled-components'
import { theme, device } from './theme'

export const GoogleStyles = styled.div`
  padding-top: ${theme.spacingXS};

  .input-wrapper {
    position: relative;

    @media ${device.tablet} {
      padding-left: 2rem;
    }

    @media ${device.mobile} {
      padding-left: 0;
      width: 100%;
    }

    input {
      width: 100%;
      height: 3.6rem;
      background: none;
      border: 2px solid ${theme.white};
      border-radius: ${theme.bigBorderRadius};
      padding: 0 ${theme.spacingXS};
      color: ${theme.white};
      font-weight: ${theme.fontLight};
      font-size: 0.85rem;
      letter-spacing: 0.02rem;
    }

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.5rem;
      font-size: 1.2rem;
    }
  }
`
