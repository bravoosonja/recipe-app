import GlobalStyles from "./styles/GlobalStyles";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search";
import Popular from "./components/Popular";
import Veggie from "./components/Veggie";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Search />
        <Category />
        <Pages />
      </Router>
      <Popular />
      <Veggie />
    </>
  );
}

export default App;
