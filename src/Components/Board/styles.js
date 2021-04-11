import styled from 'styled-components'

export const BoarD = styled.div`
    display: ${props => props.gameOver? 'flex' : 'grid'};
    min-width: 22.39vw;
    min-height: 37.37vw;
    grid-template-rows: repeat(20, 1.8vw );
    grid-template-columns: repeat(12, 1.8vw);
    grid-gap: 1px;
    border: 2px solid ${props => props.gameOver? 'red' :'#18B1D1'};
    width: 100%;
    max-width: 25vw;
    color: white;
    font-size: 3rem;
    font-family: GameFont;
    text-align: center;
    align-items: ${props => props.gameOver && 'center'};
    background: black;
`