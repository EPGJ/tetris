import React from 'react'

import {StyledCell} from './styles'
import {Pieces} from '../../Pieces'


const Cell = ({type}) =>{
    
    const selectPieceColor = () =>{
        let pieceType;
        switch(type){
            case 1:
                pieceType = 'J' 
                break;
            case 2:
                pieceType = 'I' 
                break;
            case 3:
                pieceType = 'O' 
                break;
            case 4:
                pieceType = 'L' 
                break;
            case 5:
                pieceType = 'S' 
                break;
            case 6:
                pieceType = 'Z' 
                break;
            case 7:
                pieceType = 'T' 
                break;
            default:
                pieceType = 0     
        }
        return Pieces[pieceType].color
    }


    return(
        <StyledCell type={type} color={selectPieceColor} />
    )

} 

export default React.memo(Cell)

//color={Pieces[type].color}