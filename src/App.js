import GlobalStyles from "./styles/GlobalStyles";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Category />
        <Pages />
      </Router>
      <Home />
    </>
  );
}

export default App;
