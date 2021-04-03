import { useState, useEffect} from 'react';
import { createBoard } from '../Utils/createBoard';

export const useBoard = (player, resetPlayer) => {

  const [board, setBoard] = useState(createBoard());
  
  useEffect (()=>{
    const updateBoard = prevBoard => {
      //Carrega a area do jogo
      const newBoard = prevBoard.map(row =>
        row.map(cell => (cell[1] ==='clear' ? [0, 'clear']: cell))  
      )

      //Desenha  a peca
      player.piece.forEach((row,y)=> {
        row.forEach ((value,x)=> {
          if (value !==0){
            newBoard[y+player.position.y][x+player.position.x]= [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ]
          }
        })
      })

      return newBoard;
    }
    setBoard(prev=> updateBoard(prev));
  }, [player]
  )
  return [board, setBoard];

}