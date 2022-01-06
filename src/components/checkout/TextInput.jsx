import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

const TextInput = (props) => {
	const { label, name, register, errors, width, ...inputProps } = props

	return (
		<TextInputContainer width={width}>
			<TextLabel>
				<Label htmlFor={name}>{label}</Label>
				<Small role='alert'>{errors[name]?.message}</Small>
			</TextLabel>
			<Input {...inputProps} {...register(name)}></Input>
		</TextInputContainer>
	)
}

export default TextInput

const TextInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;

	${screenSize.sm`
		width: ${({width}) => width ? '100%' : '49%'};
		margin-bottom: 1rem;
	`}
`
const TextLabel = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const Label = styled.label`
	text-transform: capitalize;
	font-size: 1.2rem;
	font-weight: 700;

	${screenSize.sm`
    font-size: 0.8rem;
  `}
`
const Small = styled.small``

const Input = styled.input`
	width: 100%;
	text-transform: capitalize;
	font-size: 1.4rem;
	font-weight: 500;
	padding: 1.5rem 2rem;
	border-radius: var(--radius);
	border: 2px solid var(--color-gray-400);
	outline: none;

	&:focus {
		caret-color: var(--color-main-normal);
		border-color: var(--color-main-normal);
	}

	${screenSize.sm`
    font-size: 1rem;
		padding: 1.1rem 1.5rem;

  `}
`
