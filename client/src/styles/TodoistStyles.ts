import styled from 'styled-components'
import { theme } from './theme'

export const TodoistStyles = styled.div`
  select {
    min-width: 11rem;
    font-size: 0.9rem;
  }

  .tasks {
    margin-top: ${theme.spacingXS};

    .task {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${theme.spacingXS};
      cursor: pointer;

      &__text {
        font-weight: ${theme.fontLight};
        font-size: 0.9rem;
      }
      &__date {
        font-weight: ${theme.fontExtraBold};
        font-size: 0.7rem;
      }
    }
  }
`
