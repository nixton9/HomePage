import styled from 'styled-components'
import { theme } from './theme'

export const CompanyCardStyles = styled.div`
  min-width: 18rem;
  min-height: 7rem;
  padding: 1rem;
  background-color: ${theme.white};
  border-radius: ${theme.borderRadius};
  position: relative;

  &.has-error {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 0.75rem;
    }
  }

  .primary {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-transform: uppercase;

    &__title {
      color: ${theme.darkGrey};
      font-size: 0.85rem;
      font-weight: ${theme.fontExtraBold};
    }

    &__ticker {
      color: ${theme.offWhite};
      font-weight: ${theme.fontBold};
      font-size: 0.85rem;
    }

    &__price {
      color: ${theme.lightGrey};
      font-weight: ${theme.fontLight};
      font-size: 1.5rem;
    }
  }

  .secondary {
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &__title {
      color: ${theme.lighterGrey};
      font-size: 0.55rem;
      font-weight: ${theme.fontExtraBold};
    }

    &__price {
      color: ${theme.black};
      font-size: 0.95rem;
      font-weight: ${theme.fontLight};

      &__percentage {
        color: ${theme.green};
        font-weight: ${theme.fontBold};

        font-size: 0.85rem;
        margin-left: 0.3rem;

        svg {
          position: relative;
          top: 1px;
        }

        &.negative {
          color: ${theme.red};

          svg {
            transform: rotate(180deg);
          }
        }
      }
    }

    .right {
      margin-left: 1rem;
    }
  }

  .delete {
    position: absolute;
    top: -5px;
    right: 0;
    background: #dcdcdc;
    border-radius: 50px;
    border: none;
    width: 1.1rem;
    height: 1.1rem;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;

    svg {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: block;
      transform: translateY(-50%);
      color: ${theme.black};
      font-size: 0.7rem;
    }
  }

  &:hover {
    .delete {
      opacity: 1;
      pointer-events: all;
    }
  }
`
