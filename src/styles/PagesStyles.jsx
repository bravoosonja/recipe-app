import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;
`
export const Card = styled.div`
    img{
        width:320px;
        height:auto;
        border-radius: 2rem;
    }
`