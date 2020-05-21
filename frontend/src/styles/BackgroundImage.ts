import styled from 'styled-components'

interface BackgroundImageProps {
    img: string
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
    background: url(${props => props.img});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh;
`