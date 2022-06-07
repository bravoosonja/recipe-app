import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchResult from './SearchResult';
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searchResult/:search" element={<SearchResult/>}/>
      </Routes>
  
  );
}

export default Pages