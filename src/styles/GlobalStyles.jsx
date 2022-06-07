import { createGlobalStyle } from "styled-components";


export const primaryColor = '#0BCF87';
export const secondaryColor = '#FFE2B6';

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-family: 'Montserrat', sans-serif;
    border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

body{
    line-height: 1;
    margin: 0% 15%;
    font-size: 16px;
    color: var(--font-color)
}

ul, li, ol{
    list-style: none;
}

h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    justify-content: center;
    padding: 1rem;
}

p{
    font-family: 'Lato', sans-serif;
}

a{
    color:#303538;
    text-decoration: none;
}

`
export default GlobalStyle