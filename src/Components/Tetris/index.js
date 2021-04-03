import React, {useState} from 'react'

import Board from '../Board'
import Stats from '../Stats/'
import StartButton from '../StartButton/'
import {createBoard} from '../../Utils/createBoard'
import {checkCollision} from "../../Utils/checkColision"
import { StyledTetrisWrapper, StyledTetris } from './styles'
import { usePlayer } from '../../hooks/usePlayer';
import { useBoard } from '../../hooks/useBoard';
import {useInterval} from "../../hooks/useInterval"

// import { StyleSheetManager } from 'styled-components'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer()
    const [board, setBoard] = useBoard(player,resetPlayer)

    const startGame = () => {
        setBoard(createBoard())
        resetPlayer()
        setGameOver(false);
        setDropTime(1000);
    }
    const movePieceHorizontal = direction =>{
        if(!checkCollision(player, board, {x: direction, y:0})){
            updatePlayerPosition({x: direction, y: 0})
        }
    }
    const drop = () =>{
        if(!checkCollision(player,board, {x:0, y:1})){
            updatePlayerPosition({x:0,y:1, collided:false})
        }
        else{
            if(player.position.y<1){
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPosition({x:0,y:0,collided:true})
        }
    }
    const dropPiece = () =>{
        setDropTime(null);
        drop()
    }
    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
          if (keyCode === 40) {
            setDropTime(1000);
          }
        }
      };
    const movePiece = ({keyCode}) =>{
        
        if(!gameOver){

            switch(keyCode){
                //Seta da esquerda
                case 37:
                    movePieceHorizontal(-1)
                    break;
                //Seta da direita
                case 39:
                    movePieceHorizontal(1)
                    break;
                //Seta para baixo
                case 40:
                dropPiece(1)
                    break;
                //Seta para cima
                case 38:
                    playerRotate(board, -1);
                    break;
                //Espaco
                case 32:
                    playerRotate(board, 1);
                    break;
            }
        }
    } 
    useInterval(() => {
        drop();
      }, dropTime);

    return(
        // StyledTetrisWrapper eh para conseguir capturar o keyDown em qualquer lugar da tela
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyUp={keyUp} onKeyDown={ (e) => movePiece(e)}  >
            <StyledTetris>
                <Board board={board}/>
                <aside>
                    {
                        gameOver? (

                            <Stats gameOver={gameOver} text ="O Jogo acabou" />

                        ):(
                            <div>
                                <Stats text="Score"/>
                                {/* <Stats text="Rows"/> */}
                                {/* <Stats text="Levels"/> */}
                            </div>
                        )
                    }
                    
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;