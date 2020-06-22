import styled from 'styled-components'
import { theme, device } from './theme'

export const IndexChartStyles = styled.div`
  .index-title {
    font-size: 1rem;
    font-weight: ${theme.fontBold};
    color: ${theme.white};

    span {
      margin-left: 0.4rem;
      font-size: 0.9rem;
      font-weight: ${theme.fontExtraLight};
    }
  }

  .chart {
    height: 15rem;
    width: 90%;
    margin-top: ${theme.spacingXS};

    @media ${device.mobile} {
      height: 11rem;
    }

    &.has-error {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 0.9rem;
        color: ${theme.white};
      }
    }

    .tooltip {
      background-color: ${theme.black};
      background-color: rgba(25, 25, 25, 0.95);
      box-shadow: ${theme.mainShadow};
      border-radius: ${theme.borderRadius};
      padding: 1rem 1.5rem;

      &__label {
        font-size: 0.9rem;
        font-weight: ${theme.fontBold};
        color: ${theme.white};
        margin-top: 0.5rem;
      }

      &__data {
        margin-top: 1rem;

        &__value {
          margin: 0.5rem 0;
          font-size: 0.85rem;

          span {
            font-weight: ${theme.fontBold};
          }
        }
      }
    }

    .recharts-cartesian-axis-tick-line {
      display: none;
    }

    .recharts-text {
      font-size: 0.75rem;
      font-weight: ${theme.fontLight};

      @media ${device.mobile} {
        font-size: 0.65rem;
      }
    }

    .xAxis .recharts-text {
      transform: translateY(10px);

      @media ${device.mobile} {
        transform: translateY(5px);
      }
    }
    .yAxis .recharts-text {
      transform: translateX(-10px);

      @media ${device.mobile} {
        transform: translateX(-5px);
      }
    }
  }
`
