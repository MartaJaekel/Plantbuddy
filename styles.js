import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: ${({ theme }) => theme.background};
  }

  main {
    @media (min-width: 1024px) {
      margin: 0 auto 4rem 0;
    }
  }

ul {
  list-style: none;
  padding: 0;
}
`;
