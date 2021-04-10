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
    padding-left:40%;
    min-height: 30px;
    width: 100%;
    border-radius: 3px;
    border: none;
    font-weight: 600;
    color: black;
    background: #4682B4;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`