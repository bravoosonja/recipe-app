//react
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
//styling components
import { Wrapper, Card, Gradient } from '../styles/HomeStyles'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide';
import '@splidejs/splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);


  const getPopular = async () => {
    //check if there are popular recipes in local storage. If not,save recipes on local storage
    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    };

    return (
      <div>
        <Wrapper>
          <h2>Popular Recipes 🔥</h2>
          <Splide options={{
            perPage: 4,
            pagination: false,
            drag: 'free',
            gap: '4rem'
          }}>
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/" + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt="{recipe.title}" />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
        </Wrapper>
      </div>
    )
  };
}

export default Popular