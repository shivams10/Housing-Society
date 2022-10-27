import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        paddng: 0;
        outline: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
    body{
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubantu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif ;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
