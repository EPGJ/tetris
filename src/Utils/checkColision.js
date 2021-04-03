
export const checkCollision = (player, board, { x: moveHorizontal, y: moveVertical }) => {
    for (let y = 0; y < player.piece.length; y += 1) {
      for (let x = 0; x < player.piece[y].length; x += 1) {
        // Verifica se  é uma célula da peça
        if (player.piece[y][x] !== 0) {
          if (
            // Verifica se o movimento está dentro da area do jogo
            !board[y + player.position.y + moveVertical] ||
            !board[y + player.position.y + moveVertical][x + player.position.x + moveHorizontal] ||
            // Verifica se a celula está se movendo para uma célula limpa
            board[y + player.position.y + moveVertical][x + player.position.x + moveHorizontal][1] !==
              'clear'
          ) {
            return true;
          }
        }
      }
    }
  }