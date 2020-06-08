import styled from 'styled-components'
import { theme, device } from './theme'

export const MainStyles = styled.div`
  width: 100%;
  padding-top: ${theme.spacingM};
  padding-bottom: ${theme.spacingXS};
  padding-right: 15rem;
  padding-left: 15rem;
  color: ${theme.white};

  .main__grid {
    display: grid;
    grid-template-columns: 55% 45%;
    margin-top: ${theme.spacingS};

    &__item {
      max-width: 45rem;
    }
  }

  @media ${device.desktopL} {
    padding-right: 11rem;
    padding-left: 11rem;
  }

  @media ${device.desktop} {
    padding-right: ${theme.spacingL};
    padding-left: ${theme.spacingL};
  }

  @media ${device.laptopL} {
    padding-left: ${theme.spacingM};

    .main__grid__item {
      max-width: 41rem;
    }
  }

  @media ${device.laptop} {
    padding-right: ${theme.spacingM};

    .main__grid__item {
      max-width: 33rem;
    }
  }
`
