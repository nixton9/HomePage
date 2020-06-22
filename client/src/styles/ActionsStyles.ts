import styled from 'styled-components'
import { theme } from './theme'

export const ActionsStyles = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
  }

  .left span,
  .right span {
    cursor: pointer;

    svg {
      font-size: 1rem;
      color: ${theme.white};
    }
  }

  .logout {
    margin-left: ${theme.spacingXS};
  }

  .see-more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: ${theme.fontBold};
    font-size: 0.65rem;

    svg {
      font-size: 1.2rem;
      margin-left: 0.5rem;
      transition: all 0.4s ease;
    }

    &:hover svg {
      transform: translateX(10px);
    }
  }
`
