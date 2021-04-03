import React from 'react'
import Cell from '../Cell'

import {StyledBoard} from './styles'

const Board = ({board}) => (
    <StyledBoard width={board[0].lenght} height={board.lenght}>
        {board.map(row => row.map((cell, x) => 
        <Cell key={x} type={cell[0]}/>))
        }
    </StyledBoard>
)

export default Board;