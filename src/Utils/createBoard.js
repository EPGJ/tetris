export const height = 20;
export const width = 12;

export const createBoard = () =>{
     //Cria e inicializa cada celula do board
    return(
        Array.from(Array(height), () => new Array(width).fill([0, 'clear']))
    )
}
        