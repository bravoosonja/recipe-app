import styled from 'styled-components'

export const Wrapper = styled.div`
    margin:4rem 3rem;
`
export const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow:hidden;
    position:relative;
        img{
        border-radius:2rem;
        position: absolute;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;    
        }
        p{
        position: absolute;
        z-index:10;
        left:50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight:600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
}
`
export const Gradient = styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)) ;
`

export const Logo = styled(Link)`
text-decoration: none;
font-size: 4rem;
font-weight: 700;
font-family: 'Montserrat', sans-serif;
color: ${({ theme }) => theme.primaryColor};
`;

export const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flext-start;
align-items: center;
svg {
    font-size: 2rem;
}
`