import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    --webkit-font-smothing: antialiased;
    --moz-osx-font-smothing: grayscale;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

body {
    background-color: ${({ theme }) => {
      theme.body;
    }};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 1.6rem;
    transition: all 0.50s linear;
}
`;
