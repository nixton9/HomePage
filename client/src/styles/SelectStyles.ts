import styled from 'styled-components'
import chevron from '../assets/chevron.svg'
import { theme } from './theme'

export const SelectStyles = styled.select`
  border: none;
  background: no-repeat;
  color: ${theme.white};
  font-weight: ${theme.fontExtraBold};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${chevron});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 10px;
  cursor: pointer;
`
