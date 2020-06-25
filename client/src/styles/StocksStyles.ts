import styled from 'styled-components'
import { theme, device } from './theme'

export const StocksStyles = styled.div`
  padding-left: ${theme.spacingS};
  margin-top: ${theme.spacingS};
  overflow-y: scroll;
  height: 85vh;

  @media ${device.mobile} {
    padding-left: 0;
    margin-top: ${theme.spacingXS};
  }

  .indexes {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      grid-gap: ${theme.spacingS};
    }
  }

  .title {
    font-size: 1rem;
    font-weight: ${theme.fontBold};
    color: ${theme.white};
    margin-top: ${theme.spacingM};

    @media ${device.tablet} {
      margin-top: ${theme.spacingS};
    }
  }

  .companies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .company {
      margin: ${theme.spacingS} ${theme.spacingS} 0 0;

      @media ${device.mobile} {
        margin: ${theme.spacingS} auto 0 auto;
      }
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
