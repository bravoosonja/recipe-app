//react
import { NavLink } from 'react-router-dom';
//styling components
import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../styles/GlobalStyles';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';
import { yellow, blue } from '../styles/GlobalStyles';

const Category = () => {
  return (


    <List>
      <SLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={'/cuisine/american'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <SLink to={'/cuisine/korean'}>
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
    </List>

  )
}


const List = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem 0rem;
list-style: none;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* margin-right: 2rem;
  background: linear-gradient(220.55deg, #E0FF87 0.01%, #8FB85B 100%);  
  color:${({ theme }) => theme.textColor};
  width: 6rem;
  height: 6rem;  */

  cursor: pointer;
  transform: scale(0.8);
  h4 {
    font-size:1.5rem;
    color: ${yellow};
    &.active{
    color: ${blue};
  }
  }
  svg {
    font-size: 3rem;
    color: ${yellow};
    &.active{
    color: ${blue};
  }
  }

  
`

export default Category