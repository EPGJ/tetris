import React from 'react'
import styled from 'styled-components'

import bgImgage from '../../Assets/bg.jpg'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImgage});
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
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
