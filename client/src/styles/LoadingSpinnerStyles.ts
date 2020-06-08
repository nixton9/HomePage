import styled from 'styled-components'
import { theme } from './theme'

export const LoadingSpinnerStyles = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: relative;

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${theme.lighterGrey};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`
