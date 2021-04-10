import React from 'react'

import {CelL} from './styles'
import {Pieces} from '../../Utils/Pieces'


const Cell = ({type}) =>{
    
    const selectPieceColor = () =>{
        let pieceType,color;
        switch(type){
            case 1:
                color = "#E67F22"
                break;
            case 2:
                color = "#FFEA00" 
                break;
            case 3:
                color = "#FA3C00" 
                break;
            case 4:
                color = "#D22E61" 
                break;
            case 5:
                color = "#AB47BB" 
                break;
            case 6:
                color = "#1185EA" 
                break;
            case 7:
                color = "#18B1D1" 
                break;
            default:
                color = "#141414"

        }
        return color
    }


    return(
        <CelL type={type} color={selectPieceColor} />
    )

} 

export default React.memo(Cell)
