import React from 'react'

import {StatS} from './styles'

const Stats = ({gameOver, text}) => (
    <StatS gameOver={gameOver}>{text}</StatS>
)

export default Stats