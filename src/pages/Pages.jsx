//components
import Home from './Home';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import SearchResult from './SearchResult';
//react
import { Routes, Route, useLocation } from 'react-router-dom';
//animation
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      < Routes Location={location} key={location.pathname} >
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searchResult/:search" element={<SearchResult />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes >
    </AnimatePresence >
  );
}

export default Pages