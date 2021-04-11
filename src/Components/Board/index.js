import React from 'react'
import Cell from '../Cell'

import {BoarD} from './styles'

const Board = ({board, gameOver}) =>{

    const reRender = () => {
        return(
            board.map(row => 
            row.map((cell, x) => <Cell key={x} type={cell[0]} />))  
        )
    }

    return(
        <BoarD gameOver={gameOver}>
        {!gameOver ? reRender() : 'Game Over' }
    </BoarD>
    )
} 

export default Board;