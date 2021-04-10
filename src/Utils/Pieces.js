// Modelagem de todas as peças do jogo
export const Pieces = {
  0: { shape: [[0]] },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
  },
  I: {
    shape: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
    ],
  },

  O: {
    shape: [
      [3, 3],
      [3, 3],
    ],
  },
  L: {
    shape: [
      [0, 4, 0],
      [0, 4, 0],
      [0, 4, 4],
    ],
  },
  S: {
    shape: [
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0],
    ],
  },
  Z: {
    shape: [
      [6, 6, 0],
      [0, 6, 6],
      [0, 0, 0],
    ],
  },
  T: {
    shape: [
      [0, 0, 0],
      [7, 7, 7],
      [0, 7, 0],
    ],
  },
  
};

export const generateRandomPiece = () => {
  const pieces = "LZISOTJ";
  // Gera um número entre 0 e 6
  let randomPieceNumber = Math.random() * pieces.length ;
  randomPieceNumber = Math.floor(randomPieceNumber)
  // Seleciona o tipo da peça
  const randomPiece = pieces[randomPieceNumber];
  return Pieces[randomPiece];
};
