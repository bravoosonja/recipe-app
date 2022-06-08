import { createGlobalStyle } from "styled-components";

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
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  transition: all 0.25s linear;
  
}

h1, h2, h3, h4 {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  color:${({ theme }) => theme.textColor};
}

p{
  font-family: 'Lato', sans-serif;
  color:${({ theme }) => theme.textColor};
}

a{
  color:${({ theme }) => theme.textColor};
  text-decoration: none;
}
`;

export const lightTheme = {
  background: "#E6E9F4",
  textColor: "#131523",
  primaryGreen: "#58B828",
  subGreen: "#E8F8E8",
  primaryYellow: "#F3BA30",
  subYellow: "#F8F8D8"
}

export const darkTheme = {
  background: "#131523",
  textColor: "#E6E9F4",
  primaryGreen: "#E8F8E8",
  subGreen: "#58B828",
  primaryYellow: "#F8F8D8",
  subYellow: "#F3BA30",
};


export default GlobalStyle;
