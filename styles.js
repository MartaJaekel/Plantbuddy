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
  }

  main {
    padding: 0;
    margin: 0 0 6rem 0;
  }

ul {
  list-style: none;
  padding: 0;
}

  :root {
// Colors
--color-green: #426B1F;
--color-beige: #FAFAF5;
--color-black: #010101;
--color-grey: #E6E6E6;
--color-lightGreen: #53A00A;
  }
`;
