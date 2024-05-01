import styled, { keyframes } from "styled-components"

const RectangleRotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const RoundMoveAnimation = keyframes`
  from {
    bottom: 90px;
  }
  to {
    bottom: 120px;
  }
`

const Rectangle = styled.div`
    width: 40%;
    height: 230px;
    position: absolute;
    z-index: 1;
    background: #3d3c5a;
    box-shadow: 300px 10px 100px #3cc89c;
`

const Rectangle1 = styled.div`
    width: 300px;
    height: 260px;
    background: linear-gradient(300deg, #353452, #27c2d4);
    position: absolute;
    right: 5%;
    top: 100px;
    transition: 1000ms;
    z-index: 1;
    animation: ${RectangleRotateAnimation} 5s linear infinite;
`

const Round = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #353452;
    background: linear-gradient(300deg, #353452, #2c6ab4);
    position: absolute;
    left: 5%;
    transition: 1000ms;
    z-index: 1;
    animation: ${RoundMoveAnimation} 1s ease-in-out infinite alternate;
`

export default function Shapes() {
  return (
    <>
      <Rectangle />
      <Rectangle1 />
      <Round />
    </>
  )
}
