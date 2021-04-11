import React, { useState } from "react";

import Board from "../Board";
import Stats from "../Stats/";
import GameOver from "../GameOver/"

import {width} from "../../Utils/createBoard"

import { createBoard } from "../../Utils/createBoard";
import { checkCollision } from "../../Utils/checkColision";
import { TetrisWrappeR, StartButtoN, TetriS } from "./styles";
import { usePlayer } from "../../hooks/usePlayer";
import { useBoard } from "../../hooks/useBoard";
import { useInterval } from "../../hooks/useInterval";
import { useGame } from "../../hooks/useGame";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [board, setBoard, rowsCleared] = useBoard(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGame(
    rowsCleared
  );
  const initialTime = 500;

  const startGame = ({ keyCode }) => {
    if (!keyCode !== 32) {
      setBoard(createBoard());
      resetPlayer();
      setGameOver(false);
      setDropTime(initialTime);
      setScore(0);
      setRows(0);
      setLevel(0);
    }
  };
  const movePieceHorizontal = (direction) => {
    if (!checkCollision(player, board, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  };
  const drop = () => {
    // aumenta o level quando 10 linhas sao limpas
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(initialTime / (level + 1) + 200);
    }

    if (!checkCollision(player, board, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      //se não houver espaço para renderizar a peça no centro superior, o jogo acaba
      if (player.position.y < 1 ) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
  };
  const dropPiece = () => {
    setDropTime(null);
    drop();
  };
  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(initialTime / (level + 1) + 200);
      }
    }
  };
  const movePiece = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        //Seta da esquerda
        case 37:
          movePieceHorizontal(-1);
          break;
        //Seta da direita
        case 39:
          movePieceHorizontal(1);
          break;
        //Seta para baixo
        case 40:
          dropPiece(1);
          break;
        // Espaco (Rotaciona no sentido anti-horário)
        case 32:
          playerRotate(board, 1);
          break;
        //Seta para cima (Rotaciona no sentido horário)
        case 38:
          playerRotate(board, -1);
          break;
        //caso padrão: não faz nada
        default: 
      }
      
    }
  };
  useInterval(() => {
    drop();
  }, dropTime);

  return (
    // TetrisWrappeR é para conseguir capturar o keyDown em qualquer lugar da tela
    <TetrisWrappeR tabIndex="0" onKeyUp={keyUp} onKeyDown={(e) => movePiece(e)}>
      <TetriS> 
        <Board board={board} gameOver={gameOver} /> 
        <aside>
          <Stats text={`Score: ${score}`} />
          <Stats text={`Level: ${level}`} />
          <StartButtoN disabled={false} onClick={startGame}>
            {!gameOver? 'Start' : 'Try Again'}
          </StartButtoN>
        </aside>
      </TetriS>
    </TetrisWrappeR>
  );
};

export default Tetris;
