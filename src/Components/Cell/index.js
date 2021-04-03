import React from 'react'

import {StyledCell} from './styles'
import {Pieces} from '../../Pieces'


const Cell = ({type}) => (
    <StyledCell type={'J'} color={Pieces['J'].color}>cell</StyledCell>
)

export default Cell