import GlobalStyles from "./styles/GlobalStyles";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search";
import { Logo, Nav } from "./styles/HomeStyles";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>NOM NOM NOM</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </>
  );
}

export default App;
