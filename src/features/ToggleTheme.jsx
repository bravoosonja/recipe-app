import styled from "styled-components";
import { CgMoon, CgSun } from 'react-icons/cg';
import { func, string } from 'prop-types';


const ToggleTheme = ({ theme, ToggleTheme }) => {
    const isLight = theme === "light";
    return (
        <button onClick={ToggleTheme}>
            <CgSun />
            <CgMoon />
        </button>
    )
}

ToggleTheme.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

const ToggleContainer = styled.button`
cursor: pointer;
display: flex;
font-size: 0.5rem;
margin: 0 auto;
overflow: hidden;
padding: 0.5rem;
position: relative;
color: ${({ theme }) => theme.textColor};
//  sun icon
&:first-child {
transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
}

// moon icon
&:nth-child(2) {
transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
}
`

export default ToggleTheme