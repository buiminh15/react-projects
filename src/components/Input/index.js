import { styled } from 'common'

const Input = styled`
	placeholder: ${props => props.placeholder ? props.placeholder : 'Please enter value'};
	type:${props => props.placeholder ? props.placeholder : 'Please enter value'};
	rows: ${props => props.rows ? props.rows : ''};
	margin: 10px;
	padding: 10px;
	width: 100%;
	height: 100%;
 `

export default Input