import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import SearchResult from './SearchResult';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searchResult/:search" element={<SearchResult />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence >
  );
}

export default Pages