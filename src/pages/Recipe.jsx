import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);


  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="{details.title}" />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ""}
          onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ""}
          onClick={() => setActiveTab("ingredients")}>
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

//styled components
const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom: 5rem;
display:flex;
.active {
  background:linear-gradient(220.55deg, #FFF6EB 0%, #DFD1C5 100%);
}
  h2 {
    margin-bottom:2rem;
  }
  li {
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`

const Button = styled.button`
background-color: ${({ theme }) => theme.primaryColor};
border: 0;
border-radius: .5rem;
box-sizing: border-box;
color: #111827;
font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: .875rem;
font-weight: 600;
line-height: 1.25rem;
padding: .75rem 1rem;
text-align: center;
text-decoration: none #D1D5DB solid;
text-decoration-thickness: auto;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
cursor: pointer;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

  :hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  
  :focus {
    outline: 2px solid transparent;
  outline-offset: 2px;
  }
`

const Info = styled.div`
margin-left: 3rem;
justify-content:space-between;
`

export default Recipe