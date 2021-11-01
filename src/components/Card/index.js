import H2 from 'components/H2'
import Img from 'components/Img'
import styled from 'styled-components'
import media from 'styled-media-query'
import logo from 'assets/images/logo512.png'

function Card() {
  const ContainerWapper = styled.div`
    padding: 0 1em;
  `

  const Row = styled.div`
    display: block;
  `

  const CardWrapper = styled.div`
    background: whitesmoke;
    padding: 4em;

    ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    padding: 1em;
  `}

    ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}
 
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
  `}
  `
  const CustomH2 = styled(H2)`
    margin: 0 0 3em;

    ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    margin: 0 0 1em;
  `}
  `

  const Col4 = styled.div`
    width: 33.3%;

    ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
  `}

    ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}
 
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
  `}
  `

  const Col8 = styled.div`
    width: 67.7%;
  `
  
  return (
    <ContainerWapper>
      <CardWrapper>
        <CustomH2>About me</CustomH2>
        <Row>
          <Col4>
            <Img alt="test" src={logo} />
          </Col4>
          <Col8></Col8>
        </Row>
      </CardWrapper>
    </ContainerWapper>
  )
}

export default Card
