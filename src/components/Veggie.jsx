import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from '../pages/HomeStyles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide';
import '@splidejs/splide/css';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);


  const getVeggie = async () => {
    //check if there are popular recipes in local storage. If not,save recipes on local storage
    const check = localStorage.getItem('veggie');
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tages=vegetarian`);
    
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes)
      console.log(data.recipes);
    }
  }

  return (
    <div>
        <Wrapper>
          <h2>Our Vegetarian Picks 🥗</h2>
        <Splide options={{
          perPage: 4,
          pagination: false,
          drag: 'free',
          gap: '4rem'
          }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                  <img src={recipe.image} alt="{recipe.title}" />
                  <Gradient/>
                </Card>
              </SplideSlide>
            )
          })}
          </Splide>
        </Wrapper>
    </div>
  )
}

export default Veggie