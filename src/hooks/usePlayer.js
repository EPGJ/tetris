import { useState, useCallback } from "react";

import { Pieces, generateRandomPiece } from "../Utils/Pieces";
import { checkCollision } from "../Utils/checkColision";
import { width } from "../Utils/createBoard";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    piece: Pieces[0].shape,
    collided: false,
  });

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: (width/2) - 2, y: 0 },
      piece: generateRandomPiece().shape,
      collided: false,
    });
  }, []);

  const rotate = (piece, direction) => {
    const rotatedPiece = piece.map((aux, index) =>
      piece.map((column) => column[index])
    );
    if (direction > 0) {
      return rotatedPiece.map((row) => row.reverse());
    }
    return rotatedPiece.reverse();
  };

  const playerRotate = (board, direction) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.piece = rotate(clonedPlayer.piece, direction);

    const position = clonedPlayer.position.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, board, { x: 0, y: 0 })) {
      clonedPlayer.position.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.piece[0].length) {
        rotate(clonedPlayer.piece, -direction);
        clonedPlayer.position.x = position;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  return [player, updatePlayerPosition, resetPlayer, playerRotate];
};
