import styled from  'styled-components'

export const StyledStats = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
margin: 0 0 20px 0;
padding: 20px;
border: 2px solid #4682B4;
min-height: 30px;
width: 100%;
border-radius: 3px;
color: ${props => (props.gameOver ? 'red' : '#999')};
background: #000;
// font-family: Pixel, Arial, Helvetica, sans-serif;
font-size:1rem;
`