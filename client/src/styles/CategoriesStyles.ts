import styled from 'styled-components'
import { theme } from './theme'

export const CategoriesStyles = styled.div`
  margin-top: ${theme.spacingS};
  color: ${theme.white};
  display: flex;
  align-items: center;

  .category {
    font-weight: ${theme.fontExtraBold};
    font-size: 1.2rem;
    margin-right: 0.5rem;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
    filter: brightness(0.8);

    &.selected {
      color: ${theme.black};
      background-color: ${theme.white};
      border-radius: ${theme.bigBorderRadius};
      filter: brightness(1);
    }
  }
`
