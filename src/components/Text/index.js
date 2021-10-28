import { styled } from 'common'

const Text = styled`
	color: ${props => props.color ? props.color : 'black'};
	margin: ${props => props.margin ? props.margin : ''};
	
 `

export default Text