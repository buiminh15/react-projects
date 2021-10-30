import Image from 'components/Image'
import Text from 'components/Text'
import styled from 'styled-components'

function Container() {
  const Wrapper = styled.div`
    padding: 4rem;
    background-color: white;
    width: 90%;
    box-sizing: border-box;
  `

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `

  const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;

  `

  return <Wrapper>
    <Text tag='h2' fontSize='27px' margin='0 0 2em'>
      About me
    </Text>
    <ContentWrapper>
      <ImageWrapper>
        <Image tag='img' />
      </ImageWrapper>
    </ContentWrapper>
  </Wrapper>
}

export default Container
