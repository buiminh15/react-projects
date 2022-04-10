import styled from 'styled-components'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Tinder } from '@styled-icons/simple-icons/Tinder'

function IconContainer() {
  const IconButtonWrapper = styled.div`
    display: flex;
  `

  const iconsData = [
    {
      icon: <FacebookCircle size='20' />,
      url: 'https://hanoitv.vn/chuyen-dong-ha-noi-trua-ngay-30102021-a177712.html',
    },
    {
      icon: <Twitter size='20' />,
      url: 'https://hanoitv.vn/chuyen-dong-ha-noi-trua-ngay-30102021-a177712.html',
    },
    {
      icon: <Tinder size='20' />,
      url: 'https://hanoitv.vn/chuyen-dong-ha-noi-trua-ngay-30102021-a177712.html',
    }

  ]

  return (
    <IconButtonWrapper>
      {iconsData.map((icon, i) => (
        <a href={icon.url} key={i}>{icon.icon}</a>
      ))}
    </IconButtonWrapper>
  )
}

export default IconContainer
