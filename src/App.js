//styling components
import GlobalStyles, { lightTheme, darkTheme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Logo, Nav } from "./styles/HomeStyles";
import { GiKnifeFork } from "react-icons/gi";

//components
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Home from "./pages/Home";
import Search from "./features/Search";
import ToggleTheme from "./features/ToggleTheme";

//hook
import { persistTheme } from "./features/persistTheme";

//react
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./features/GlobalContext";

function App() {
  const [theme, setTheme] = persistTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}>NOM NOM NOM</Logo>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          </Nav>
          <Search />
          <Category />
          <Pages />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
