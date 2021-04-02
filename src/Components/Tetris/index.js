import React from 'react'

import Board from '../Board/'
import Stats from '../Stats/'
import StartButton from '../StartButton/'
import {createBorder} from '../../Config'


import { StyledTetrisWrapper, StyledTetris } from './styles'


const Tetris = () => {
    
    
    
    
    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Board board={createBorder()}/>
            <aside>
                <div>
                <Stats text="Score"/>
                <Stats text="Rows"/>
                <Stats text="Levels"/>
                </div>
                <StartButton/>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;