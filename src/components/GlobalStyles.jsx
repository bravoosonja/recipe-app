import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

const GlobalStyle=createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-family: 'Montserrat', sans-serif;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

p{
    font-family: 'Lato', sans-serif;
}

`
export default GlobalStyle