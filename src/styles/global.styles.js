import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        font-size: 62.5%;
    }

    html {
        overflow-x: hidden;
    }

    body {
        font-family: Nunito, sans-serif;
        background: darkgray;

        /* font-weight: 600; */
        overflow-x: hidden;
    }

    ul {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6, a {
        /* font-weight: 600; */
        font-family: Nunito, sans-serif;

    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

   

   
`;
