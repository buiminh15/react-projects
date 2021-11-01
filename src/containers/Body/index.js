import Card from "components/Card"
import styled from "styled-components"


function Body() {
  const ContainerWrapper = styled.div`
    margin: 0 auto;
    padding: 0 1em;
  `
  return (
    <ContainerWrapper><Card></Card></ContainerWrapper>
  )
}

export default Body