import styled from 'styled-components'
import chevron from '../assets/chevron.svg'
import { theme } from './theme'

export const TodoistStyles = styled.div`
  .projects {
    select {
      border: none;
      background: no-repeat;
      color: ${theme.white};
      font-weight: ${theme.fontExtraBold};
      font-size: 0.9rem;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background: url(${chevron});
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 10px;
      min-width: 11rem;
    }
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

  .add-task {
    margin-top: 3rem;
    float: right;
    cursor: pointer;

    svg {
      font-size: 1rem;
    }
  }
`
