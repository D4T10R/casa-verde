import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-textos: 'Elsie Swash Caps', cursiva;
        --font-titulos: 'Montserrat', sem serifa;
        --peso-textos: 400;
        --peso-titulos: 900; 
        --cor-titulos: rgba(32, 32, 32, 1);
        --cor-textos: rgba(32, 32, 32, 0.8);
        --cor-amarela: rgba(255, 203, 71, 1);
    }

    * {
        margin: 0;
        padding: 0;
    }

`
