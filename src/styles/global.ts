import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    //scrollbar configuration
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.secondary};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 1rem;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors.background};
      font-family: ${theme.font.family};
      font-size: ${theme.sizes.medium};
      color: ${theme.colors.default};
      height: 100vh;
      width: 100vw;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
      font-family: ${theme.font.family};
      font-weight: 700;
    }

    #root,
    #__next {
      isolation: isolate;
    }
  `}

`
export default GlobalStyles
