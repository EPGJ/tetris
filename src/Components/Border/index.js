import React from 'react'
import Cell from '../Cell/'

import {StyledBorder} from './styles'

const Border = ({border}) => (
    <StyledBorder width={border[0].lenght} height={border.lenght}>
        {border.map(row => row.map((cell, x) => 
        <Cell key={x} type={cell[0]}/>))
        }
    </StyledBorder>
)

export default Border