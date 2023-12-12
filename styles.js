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

ul {
  list-style: none;
  padding: 0;
}

  :root {
// Colors
--color-green: #426B1F;
--color-beige: #FAFAF5;
--color-black: #010101;
  }
`;
