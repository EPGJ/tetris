import React,{useState} from 'react'

import Board from '../Board'
import Stats from '../Stats/'
import StartButton from '../StartButton/'
import {createBoard} from '../../Utils/createBoard'
import { StyledTetrisWrapper, StyledTetris } from './styles'

import { usePlayer } from '../../hooks/usePlayer';
import { useBoard } from '../../hooks/useBoard';



const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    
    const [player] = usePlayer()
    const [board, setBoard] = useBoard(player)





    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Board board={board}/>
            <aside>
                {
                    gameOver? (

                        <Stats gameOver={gameOver} text ="O Jogo acabou" />

                    ):(
                        <div>
                            <Stats text="Score"/>
                            <Stats text="Rows"/>
                            <Stats text="Levels"/>
                        </div>
                    )
                }
                
                <StartButton/>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;