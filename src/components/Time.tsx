import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const TimeTextMoveAnimation = keyframes`
  from {
    top: -5px;
  }
  to {
    top: 15px;
  }
`

const TimeItem = styled.div`
    width: 80%;
    height: 230px;
    background: none;
    backdrop-filter: blur(80px);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    box-shadow: 0px -20px 100px #342b6c;
`

const TimeText = styled.div`
    font-size: 130px;
    font-family: "Contrail One", sans-serif;
    font-weight: 1000;
    background: linear-gradient(135deg, #3ade97, #59e6f9);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    transition: 1000ms;
    animation: ${TimeTextMoveAnimation} 1s ease-in-out infinite alternate;
    @media screen and (max-width: 600px) {
      font-size: 111px;
    }
    @media screen and (max-width: 500px) {
      font-size: 97px;
    }
`

export default function Time() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

  return (
    <>
    <TimeItem>
        <TimeText>
            {time.toLocaleTimeString()}
        </TimeText>
    </TimeItem>
    </>
  )
}
