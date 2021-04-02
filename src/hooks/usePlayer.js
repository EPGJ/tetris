import { useState } from 'react';

import { generateRandomPiece } from '../Pieces';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    piece: generateRandomPiece().shape,
    collided: false,
  });

  return [player];
}