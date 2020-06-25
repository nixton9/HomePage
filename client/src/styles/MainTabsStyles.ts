import styled from 'styled-components'
import { theme, device } from './theme'

export const MainTabsStyles = styled.div`
  padding: ${theme.spacingXS} 0 0 ${theme.spacingS};

  @media ${device.mobile} {
    padding-left: 0;
  }

  .tabs__icons {
    display: flex;
    align-items: center;

    &__single-icon {
      margin-right: 2rem;
      cursor: pointer;
      position: relative;
      filter: brightness(0.65);
      transition: all 0.3s ease;

      &.selected,
      &:hover {
        filter: brightness(1);
      }

      svg {
        font-size: 1.4rem;
      }

      .counter {
        position: absolute;
        top: -8px;
        right: -10px;
        font-size: 0.55rem;
        font-weight: ${theme.fontExtraBold};
      }
    }
  }

  .tabs__header {
    margin-top: ${theme.spacingXS};
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding-bottom: 10px;

    p {
      font-weight: ${theme.fontExtraBold};
      font-size: 0.7rem;
    }
  }

  .tabs__content {
    margin-top: ${theme.spacingXS};
    width: 100%;

    &__single-content {
      display: none;

      &.active {
        display: block;
        min-height: 20rem;
      }

      .block-overflow {
        max-height: 25rem;
        overflow-y: scroll;
        padding-left: 1rem;

        .block-single {
          position: relative;

          &.unread {
            &:after {
              content: '';
              position: absolute;
              top: 6px;
              left: -1rem;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background-color: ${theme.white};
            }
          }
        }
      }
    }
  }
`
