import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card } from '../styles/PagesStyles';

function SearchResult() {
   
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, []);

  return (
      <Grid>
          {searchedRecipes.map((item => {
              return (
                  <Card key={item.id}>
                      <img src={item.image} alt="{item.title}" />
                      <h4>{item.title}</h4>
                  </Card>
              )}))}</Grid>
  )
}

export default SearchResult