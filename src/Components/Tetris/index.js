import React from 'react'

import Border from '../Border'
import Stats from '../Stats/'
import StartButton from '../StartButton/'
import {createBorder} from '../../Utils/createBorder'
import { StyledTetrisWrapper, StyledTetris } from './styles'


import { usePlayer } from '../../hooks/usePlayer';
import { useBoard } from '../../hooks/useBoard';



const Tetris = () => {
    return(
        <StyledTetrisWrapper>
            <StyledTetris>
                <Border border={createBorder()}/>
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