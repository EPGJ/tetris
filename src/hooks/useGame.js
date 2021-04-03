import { useState, useEffect, useCallback } from 'react';

export const useGame = (rowsCleared) => {
    const [rows, setRows] = useState(0);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(0);

    const points = [40, 100, 300, 1200];

    const calculateScore = useCallback(() => {
        if (rowsCleared > 0) {
        // calculo de pontos original do Tetris
        setScore(prev => prev + points[rowsCleared - 1] * (level + 1));
        setRows(prev => prev + rowsCleared);
        }
    }, [level, points, rowsCleared]);

    useEffect(() => {
        calculateScore();
    }, [calculateScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
};
