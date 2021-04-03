import { useState, useCallback } from 'react';

import { Pieces, generateRandomPiece } from '../Pieces';
import { width } from "../Utils/createBoard"


export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    piece: Pieces[0].shape,
    collided: false,
  });

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y)},
      collided,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: (width / 2 )- 2, y: 0 },
      piece: generateRandomPiece().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPosition, resetPlayer];
}