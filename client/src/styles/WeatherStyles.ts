import styled from 'styled-components'
import { theme, device } from './theme'

export const WeatherStyles = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .icon {
    margin-right: 0.75rem;

    svg {
      font-size: 6rem;
    }
  }

  .info {
    &__city {
      font-weight: ${theme.fontBold};
      font-size: 1.3rem;
      line-height: 2rem;
    }
    &__desc {
      font-weight: ${theme.fontLight};
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
    &__temp  {
      display: flex;

      p {
        font-size: 0.8rem;
        line-height: 1.4rem;
        font-weight: ${theme.fontExtraLight};
        margin-right: 0.8rem;

        strong {
          font-weight: ${theme.fontRegular};
        }
      }
    }
  }

  .reload {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    cursor: pointer;

    svg {
      font-size: 0.9rem;
      transform-origin: center center;
    }
  }

  &:hover {
    .reload {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    align-items: flex-start;
    justify-content: flex-end;

    .icon {
      margin-right: 0.4rem;

      svg {
        font-size: 4rem;
        transform: translateY(-9px);
      }
    }
    .info__city {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
    .info__desc {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    .info__temp p {
      font-size: 0.7rem;
      margin-right: 0.5rem;
    }
  }
`
