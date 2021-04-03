import React from 'react'

import {StyledStats} from './styles'

const Stats = ({gameOver, text}) => (
    <StyledStats gameOver={gameOver}>{text}</StyledStats>
)

export default Stats