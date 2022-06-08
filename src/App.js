//styling components
import styled from 'styled-components';
import GlobalStyles, { lightTheme, darkTheme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";


//components
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Home from "./pages/Home";
import Search from "./features/Search";
import ToggleTheme from "./features/ToggleTheme";



//hook
import { persistTheme } from "./features/persistTheme";

//react
// import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [theme, setTheme] = persistTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Nav>
            <Logo to={"/"}>NOM NOM NOM</Logo>
            <Search />
            <ToggleTheme theme={theme} toggleTheme={ToggleTheme} />
          </Nav>
          <Category />
          <Home />
          <Pages />
        </Router>
      </>
    </ThemeProvider>
  );
}

//styling components
const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weight: 700;
font-family: 'Montserrat', sans-serif;
margin-left: 1rem;
color: "#CCFFD0" !important;
`;

const Nav = styled.div`
padding: 1rem;
display: grid;
grid-template-columns:1fr 2fr 1fr;
justify-content: center;
align-items: center;
svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.backGround};
    background: transparent;
}
`



export default App;
