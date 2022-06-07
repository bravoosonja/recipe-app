import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    --font-color: #303538;
    --primary-color: #0BCF87;
    --secondary-color: #FFE2B6;

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-family: 'Montserrat', sans-serif;
}

body{
    margin: 0% 15%;
    font-size: 16px;
    color: var(--font-color)
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

p{
    font-family: 'Lato', sans-serif;
}

a{
    color:var(--primary-color);
}

`
export default GlobalStyle