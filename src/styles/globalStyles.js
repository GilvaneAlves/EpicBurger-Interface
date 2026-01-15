import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.poppinsFont};
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: ${({ theme }) => theme.poppinsFont};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
export default GlobalStyle;
