//react
import { NavLink } from 'react-router-dom';
//styling components
import styled from 'styled-components';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';


const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <SLink to={'/cuisine/Korean'}>
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
  margin-right: 2rem;
  color:${({ theme }) => theme.textColor};
  cursor: pointer;
  transform: scale(0.7);

  h4 {
    font-size:1.5rem;
    color:${({ theme }) => theme.subYellow};

    &.active{
      color:${({ theme }) => theme.primaryYellow};
    }
  }
  
  svg {
    font-size: 2rem;
    color:${({ theme }) => theme.subYellow};

    &.active{
      color:${({ theme }) => theme.primaryYellow};
  }
}
`

export default Category