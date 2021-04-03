import React from 'react'

import {StyledCell} from './styles'
import {Pieces} from '../../Pieces'


const Cell = ({type}) =>{
    
    console.log(type)
    console.log(JSON.stringify(Pieces[type]))
    return(
        <StyledCell type={type} color={Pieces[type].color} ></StyledCell>
    )

} 

export default Cell

//color={Pieces[type].color}