export const borderWidth = 12;
export const borderHeight = 20;

export const createBorder = () =>
Array.from(Array(borderHeight), 
() => new Array(borderWidth).fill([0, 'clear']))