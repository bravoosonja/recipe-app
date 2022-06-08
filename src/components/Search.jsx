//react
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styling components
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';


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
    margin: 0 rem 20rem;
    width:100%;
    position: relative;
    padding: 1rem;

input {
    border:none;
    background:linear-gradient(220.55deg, #FFF6EB 0%, #DFD1C5 100%);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius:1rem;
    outline: none;
    width:100%;
}
svg{
    position:absolute;
    top:50%;
    left: 1%;
    transform: translate(100%, -50%);
}
`

export default Search