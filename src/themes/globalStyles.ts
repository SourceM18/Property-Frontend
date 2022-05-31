import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  body {
    //background: ${({ theme }) => theme.bgColor};
    //color: ${({ theme }) => theme.textColor};
  }
`
