import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body {
    -webkit-font-smoothing: antialiased;
  }

  ::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #A09999;
    font-size: 20px;
  }
  ul {
    list-style: none;
  }
  table, input, li, button, span, p, a {
    font-family: 'epilogue', sans-serif;
  }

  button {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'epilogue', sans-serif;
    font-weight: bold;
    color: #000;
  }

  button {
    cursor: pointer;
  }

`
