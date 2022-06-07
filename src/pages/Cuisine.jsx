import { Grid, Card } from '../styles/PagesStyles';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';



function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);


  return (
      <Grid>
          {cuisine.map((item) => {
              return (
                  <Card key={item.id}>
                      <img src={item.image} alt="{item.title}" />
                      <h4>{item.title}</h4>
                  </Card>
              )
          })}
    </Grid>
  )
}



export default Cuisine