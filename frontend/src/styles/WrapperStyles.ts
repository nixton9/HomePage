import styled from 'styled-components'

interface WrapperStylesProps {
  img: string
  opacity: number
}

export const WrapperStyles = styled.div<WrapperStylesProps>`
  background: url(${props => props.img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, ${props => props.opacity});
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }
`
