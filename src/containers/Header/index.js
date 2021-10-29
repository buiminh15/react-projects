import Text from 'components/Text'
import styled from 'styled-components'
import { colors } from 'common'

const Wrapper = styled.div`
  padding: 60px 0 40px;
  box-sizing: border-box;
  display: flex;
  color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
`

function Header() {
  return (
    <Wrapper>
      <Text tag="h1" color={`${colors.WHITE}`} fontSize="4em">
        I am Minh
      </Text>
    </Wrapper>
  )
}

export default Header
