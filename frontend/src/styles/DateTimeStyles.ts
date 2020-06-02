import styled from 'styled-components'
import { theme } from './theme'

export const DateTimeStyles = styled.div`
  color: ${theme.white};

  .time {
    font-size: 3.3rem;
    font-weight: ${theme.fontExtraLight};

    .period {
      font-size: 1.6rem;
    }
  }

  .date {
    font-weight: ${theme.fontBold};
    font-size: 1.1rem;
    padding-left: 3px;
    line-height: 2rem;
  }
`
