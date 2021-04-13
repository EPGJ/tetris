import styled from 'styled-components'

export const CelL = styled.div`
    width: auto;
    border: ${props => props.color === 'none'? '0px' :'2px'} solid ${props => props.color};
    background: ${props => props.theme === true? props.color: 'none' };
`