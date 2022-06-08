//react
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styling components
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { blue } from '../styles/GlobalStyles';

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searchResult/' + input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </FormStyle>
    )
}


//styled components
const FormStyle = styled.form`
display: flex;
justify-content: center;
width:100%;
position: relative;
padding: 1rem;

input {
    border:none;
    background: ${blue};
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor};
    padding: 1rem 3rem;
    border: none;
    border-radius:1rem;
    outline: none;
    width:70%;
    justify-content: center;
    align-items: center;
}
svg{
    position:absolute;
    top:50%;
    left: 17%;
    font-size: 16px;
    transform: translate(100%, -50%);
    color:${({ theme }) => theme.textColor};
    z-index:1;
}
`

export default Search