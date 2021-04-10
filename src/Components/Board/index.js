import React from 'react'
import Cell from '../Cell'

import {BoarD} from './styles'

const Board = ({board}) =>{

    const reRender = () => {



        return(
            board.map(row => 
                row.map((cell, x) => <Cell key={x} type={cell[0]} />))  
        )

    }



    return(
        <BoarD>
        {
             reRender()
        }
    </BoarD>
    )
} 

export default Board;