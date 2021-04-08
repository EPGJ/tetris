export const Pieces = {
    0: { shape: [[0]], color: '20, 20, 20' },
    J: {
      shape: [
               [0, 1, 0],
               [0, 1, 0],
               [1, 1, 0]
             ],
      color: '230, 127, 34',       
    },
    I: {
         shape: [
                  [0, 2, 0, 0],
                  [0, 2, 0, 0],
                  [0, 2, 0, 0],
                  [0, 2, 0, 0]
                ],
         color: '255, 234, 0',       
    },
    
    O: {
      shape: [
               [3, 3],
               [3, 3],
             ],
      color: '250, 60, 0',       
    },
    L: {
      shape: [
               [0, 4, 0],
               [0, 4, 0],
               [0, 4, 4]
             ],
      color: '210, 46, 97',       
    },
    S: {
      shape: [
               [0, 5, 5],
               [5, 5, 0],
               [0, 0, 0]
             ],
      color: '171, 71, 187',       
    },
    Z: {
      shape: [
               [6, 6, 0],
               [0, 6, 6],
               [0, 0, 0]
             ],
      color: '17, 133, 234',       
    },
    T: {
      shape: [
               [0, 0, 0],
               [7, 7, 7],
               [0, 7, 0]
             ],
      color: '24, 177, 209',       
    },
  }
  
  export const generateRandomPiece = () => {
    const pieces = 'LZISOTJ';
    const randPiece =
      pieces[Math.floor(Math.random() * pieces.length)];
    return Pieces[randPiece];
  }
  
 