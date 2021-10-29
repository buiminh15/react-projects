import Text from 'components/Text'
import styled from 'styled-components'
import { colors } from 'common'
import Icons from 'containers/Icons'

const Wrapper = styled.div`
  padding: 60px 0 40px;
  box-sizing: border-box;
  display: block;
  text-align: center;
`

function Header() {
  return (
    <Wrapper>
      <Text
        tag="h1"
        color={`${colors.WHITE}`}
        fontSize="4em"
        margin="25px 0 12.5px"
      >
        I am Minh
      </Text>
      <Text
        tag="p"
        textTransform="capitalize"
        color={`${colors.WHITE}`}
        fontSize="1.4em"
        margin="0 0 12.5px"
      >
        web designer
      </Text>
      <Icons></Icons>
    </Wrapper>
  )
}

export default Header
