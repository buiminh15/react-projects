import { styled, images as IMAGES } from 'common'

const Image = styled`
	src: ${(props) => (props.src ? props.src : IMAGES.default)};
	display: 'block';
	max-width: 100%;
	height: auto;
 `

export default Image
