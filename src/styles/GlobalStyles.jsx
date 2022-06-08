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
  background: "#FCFFFE",
  textColor: "#303538",
  primaryColor: "#B9D5B6",
  secondaryColor: "#F0E4BF",
};

export const darkTheme = {
  background: "#191A19",
  textColor: "#fff",
  primaryColor: "#1E5128",
  secondaryColor: "##F0E4BF",
};


export default GlobalStyle;
