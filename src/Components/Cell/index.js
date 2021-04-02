import React from 'react'

import {StyledCell} from './styles'
import {Pieces} from '../../Pieces'


const Cell = ({type}) => (
    <StyledCell type={'L'} color={Pieces['L'].color}>Cell</StyledCell>
)

export default Cell