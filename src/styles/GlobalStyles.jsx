import styled, { createGlobalStyle } from "styled-components";

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
  background: "#C8DDD3",
  textColor: "#6FA567",
}

export const darkTheme = {
  background: "#6FA567",
  textColor: "#C8DDD3",
};

export const blue = "#DBE9F2";
export const yellow = "#FEEEB8";

export default GlobalStyle;
