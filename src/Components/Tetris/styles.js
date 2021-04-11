import React from 'react'
import styled from 'styled-components'

import bgImgage from '../../Assets/bg.jpg'

export const TetrisWrappeR = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImgage});
    background-size: cover;
    overflow: hidden;
`

export const TetriS = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 500px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 10px;
    }
`
export const StartButtoN = styled.div`
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    min-height: 30px;
    width: 100%;
    border: 2px solid #18B1D1;
    border-radius: 3px;
    color: #EBE2E2;
    font-family: GameFont;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`