import styled from 'styled-components'
import {Adobe} from '@styled-icons/boxicons-logos/Adobe'
import {Airbnb} from '@styled-icons/boxicons-logos/Airbnb'
import {Algolia} from '@styled-icons/boxicons-logos/Algolia'
import A from 'components/A'

const ContainerWrapper = styled.div`
  display: block;
  margin: 1em 0;
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const iconsData = [
  {
    icon: <Adobe size={30}/>, url: 'https://www.google.com/'
  },
  {
    icon: <Airbnb size={30}/>, url: 'https://www.google.com/'
  },
  {
    icon: <Algolia size={30}/>, url: 'https://www.google.com/'
  },
]


function Icons() {
  return (
    <ContainerWrapper>
      <IconsWrapper>
        {iconsData.map((iconData, index) => (<A href={iconData.url} key={index}>{iconData.icon}</A>))}
      </IconsWrapper>
    </ContainerWrapper>
  )
}

export default Icons
