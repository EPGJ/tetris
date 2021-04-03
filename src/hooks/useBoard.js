import { useState } from 'react';
import { createBoard } from '../Utils/createBoard';

export const useBoard = () => {

  const [board, setBoard] = useState(createBoard());
  return [board, setBoard];

}