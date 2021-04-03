import React from 'react'

import {StyledCell} from './styles'
import {Pieces} from '../../Pieces'


const Cell = ({type}) => (
    <StyledCell type={type} color={Pieces[type].color}></StyledCell>
)

export default Cell