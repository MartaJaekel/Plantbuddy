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
    padding: 0;
    margin: 0 0 6rem 0;
  }

ul {
  list-style: none;
  padding: 0;
}

  :root {
// Colors general 
--color-green: #426B1F; 
--color-beige: #FAFAF5;
--color-black: #010101;
--color-grey: #E6E6E6;
--color-lightGreen: #53A00A;
--color-red: #C75321;

// Colors Light Mode
--color-succulentsLight: #DEEFD8;
--color-palmsLight: #BBD5DD;
--color-herbsLight: #DAA98B;
--color-foliageLight: #A5CB84;
--color-treesLight: #E1DCCF;
--color-floweringLight: #F7D48F;
-color-fernsLight: #BFF0E4;

// Colors Dark Mode
--color-blackGreen: #2B2E28;
--color-darkGreen: #3E4438;
--color-succulentsDark: #5F7B55;
--color-palmsDark: #436C79;
--color-herbsDark: #813514;
--color-foliageDark: #3E512E;
--color-treesDark: #706C62;
--color-floweringDark: #AF770A;
-color-fernsDark: #435853;
  }
`;
