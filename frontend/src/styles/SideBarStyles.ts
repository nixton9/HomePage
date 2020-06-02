import styled from 'styled-components'
import { theme } from './theme'

export const SideBarStyles = styled.nav`
  padding: 3rem 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .nav__items  {
    &.main {
      svg {
        margin: 3rem 0;
      }
    }

    &__single-item {
      display: block;
      cursor: pointer;

      svg {
        color: ${theme.white};
        font-size: 2rem;
        transition: all 0.4s ease;
      }
      &:hover svg {
        filter: brightness(1.5);
      }
    }
  }
`
