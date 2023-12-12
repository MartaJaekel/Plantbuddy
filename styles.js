import { createGlobalStyle } from "styled-components";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

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
