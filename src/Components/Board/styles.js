import styled from 'styled-components'

export const StyledBoard = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.widht}));
    grid-template-columns: repeat(${props => props.widht}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
    
`