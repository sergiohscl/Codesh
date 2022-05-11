import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, :root{
        min-height: 100%;
    }

    body{
        background-color: rgb(51 65 85);
        color: rgb(186 230 253);
    }
`
