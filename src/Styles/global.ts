import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  teme: string;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Lexend";
  }
  html{
    scroll-behavior: smooth;
  }
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
  }
  
  :root {
    ${(props) => {
      switch (props.teme) {
        case 'dark':
          return `
          --color1: #f10101;
          --background: #000000;
          `;
        case 'gengar':
          return `
          --color1: #630090;
          --background: #000000;
          `;
        default:
          return `
          --color1: #f10101;
          --background: #ffffff;
          `;
      }
    }} 
  }
    // props.theme === "light" ? (
    //   "--grey0: #0B0D0D;"

    // ) : (
    //   "--grey0: #0B0D0D;"
    // )}
`;