import styled from 'styled-components'

import bgImgage from '../../Utils/bg.jpg'

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
    padding: 40 px;
    margin: 0 auto;
    max-width: 900px;
`
