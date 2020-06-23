import styled from 'styled-components'
import { theme, device } from './theme'

export const CategoriesStyles = styled.div`
  margin-top: ${theme.spacingS};
  color: ${theme.white};
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.mobile} {
    margin-top: 1rem;
  }

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

    @media ${device.mobile} {
      font-size: 0.9rem;
      margin-right: 0.2rem;
      padding: 0.1rem 0.5rem;
      margin-bottom: 0.3rem;
    }
  }
`
