import styled from 'styled-components'

export const StyledBoard = styled.div`
    display: grid;
    grid-template-rows: repeat(20, 1.8vw );
    grid-template-columns: repeat(12, 1.8vw);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
    
`