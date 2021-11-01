import H1 from 'components/H1'
import Icons from 'components/Icons'
import P from 'components/P'
import styled from 'styled-components'

function Header() {
  const ContainerWrapper = styled.div`
    display: block;
    text-align: center;
    padding: 3em 0 1em;
  `
  return (
    <ContainerWrapper>
      <H1>I am AAAAAAA</H1>
      <P>Web Designer</P>
      <Icons></Icons>
    </ContainerWrapper>
  )
}

export default Header
