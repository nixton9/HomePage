import styled from 'styled-components'
import { theme, device } from './theme'

export const SideBarStyles = styled.nav`
  padding: 3rem 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .nav__items  {
    &.main {
      .nav__items__single-item {
        margin: 3rem 0;
      }
    }

    &__single-item {
      display: block;
      cursor: pointer;

      svg {
        color: ${theme.white};
        font-size: 2rem;
        filter: brightness(0.8);
      }
    }
  }

  @media ${device.tablet} {
    padding-top: ${theme.spacingXS};
    position: absolute;
    top: 0;
    width: 100%;
    flex-direction: row;

    .main {
      display: flex;

      .nav__items__single-item {
        margin: 0 ${theme.spacingXS} !important;
      }
    }

    .nav__items__single-item svg {
      font-size: 1.85rem;
    }
  }

  @media ${device.mobile} {
    padding: 1.5rem 0.7rem 0 0.7rem;

    .main .nav__items__single-item {
      margin: 0 0.7rem !important;
    }

    .nav__items__single-item svg {
      font-size: 1.4rem;
    }
  }
`
