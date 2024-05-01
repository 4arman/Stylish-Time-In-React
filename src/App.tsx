import styled from "styled-components"
import Time from "./components/Time"
import Shapes from "./components/Shapes";
import Description from "./components/Description";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: linear-gradient(160deg, #00ffb3 ,#353452);
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function App() {

  return (
    <Container>
      <Time />
      <Shapes />
      <Description />
    </Container>
  )
}
