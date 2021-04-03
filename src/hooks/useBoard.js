import { useState, useEffect} from 'react';
import { createBoard } from '../Utils/createBoard';

export const useBoard = (player, resetPlayer) => {

  const [board, setBoard] = useState(createBoard());
  const [rowsCleared, setRowsCleared] = useState(0)

  useEffect (()=>{

    setRowsCleared(0)

    const checkRow = newBoard =>
      newBoard.reduce((acumulator, row) => {
        if(row.findIndex(cell=> cell[0] === 0) === -1){
          setRowsCleared(prev=> prev+1)
          acumulator.unshift(new Array(newBoard[0].length). fill([0, "clear"]));
          return acumulator
        }
        acumulator.push(row);
        return acumulator;
      },[])





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

      if(player.collided){
        resetPlayer();
        return checkRow(newBoard)
        
      }

      return newBoard;
    }
    setBoard(prev=> updateBoard(prev));
  }, [player, resetPlayer]
  )
  return [board, setBoard];

}