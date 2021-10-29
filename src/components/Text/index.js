import { styled, colors } from 'common'

const Text = styled`
	color: ${(props) => (props.color ? `#${props.color}` : `#${colors.BLACK}`)};
	margin: ${(props) => (props.margin ? props.margin : '')};
	padding: ${(props) => (props.padding ? props.padding : '')};
	text-transform: ${(props) => (props.textTransform ? props.textTransform : '')};
	font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
 `

export default Text
