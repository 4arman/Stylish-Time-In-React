import styled from "styled-components"

const DescriptionContainer = styled.span`
    font-size: 20px;
    font-family: "Akshar", sans-serif;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    bottom: 30px;
    right: 30px;
`

const NameText = styled.a`
    color: #1bf4ff;
    font-weight: 100;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    &:active {
        opacity: 0.6
    }
`

export default function Description() {
  return (
    <DescriptionContainer>
        Techs: React JS, Vite, TS, SASS. 
        <p>
            By 
            <NameText 
            href="https://github.com/4arman"
            target="_blank"> 4arman </NameText>
            on GitHub
        </p>
    </DescriptionContainer>
  )
}
