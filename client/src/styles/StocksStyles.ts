import styled from 'styled-components'
import { theme } from './theme'

export const StocksStyles = styled.div`
  padding-left: ${theme.spacingS};
  overflow-y: scroll;
  height: 85vh;

  .indexes {
    margin-top: ${theme.spacingS};
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .title {
    font-size: 1rem;
    font-weight: ${theme.fontBold};
    color: ${theme.white};
    margin-top: ${theme.spacingM};
  }

  .companies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .company {
      margin: ${theme.spacingS} ${theme.spacingS} 0 0;
    }
  }

  .no-companies {
    text-align: center;
    font-weight: ${theme.fontExtraLight};
    font-size: 1rem;
    color: #ffffff;
    margin-top: ${theme.spacingM};
  }

  .actions {
    margin-right: ${theme.spacingS};
  }
`
