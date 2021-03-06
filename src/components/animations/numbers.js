import { keyframes } from 'styled-components'

export const create = keyframes`
  0% {
    width: 0px;
    height: 0px;
    opacity: 0;
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`
export const merge = keyframes`
 0% {
    height: 100%;
  }

  30% {
    height: 115%;
  }

  100% {
    height: 100%;
  }
`
