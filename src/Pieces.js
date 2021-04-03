export const Pieces = {
    0: { shape: [[0]], color: '0, 0, 0' },
    J: {
      shape: [
               [0, 1, 0],
               [0, 1, 0],
               [1, 1, 0]
             ],
      color: '36, 95, 223',       
    },
    I: {
         shape: [
                  [0, 2, 0, 0],
                  [0, 2, 0, 0],
                  [0, 2, 0, 0],
                  [0, 2, 0, 0]
                ],
         color: '80, 227, 230',       
    },
    
    O: {
      shape: [
               [3, 3],
               [3, 3],
             ],
      color: '223, 217, 36',       
    },
    L: {
      shape: [
               [0, 4, 0],
               [0, 4, 0],
               [0, 4, 4]
             ],
      color: '223, 173, 36',       
    },
    S: {
      shape: [
               [0, 5, 5],
               [5, 5, 0],
               [0, 0, 0]
             ],
      color: '48, 211, 56',       
    },
    Z: {
      shape: [
               [6, 6, 0],
               [0, 6, 6],
               [0, 0, 0]
             ],
      color: '227, 78, 78',       
    },
    T: {
      shape: [
               [0, 0, 0],
               [7, 7, 7],
               [0, 7, 0]
             ],
      color: '132, 61, 198',       
    },
  }
  
  export const generateRandomPiece = () => {
    const pieces = 'LZISOTJ';
    const randPiece =
      pieces[Math.floor(Math.random() * pieces.length)];
    return Pieces[randPiece];
  }
  
