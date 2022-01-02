import React from 'react'
import styled from 'styled-components'

const TextInput = (props) => {
	const { label, name, register, errors, ...inputProps } = props

	return (
		<TextInputContainer>
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
`
const Small = styled.small``

const Input = styled.input`
	width: 100%;
	text-transform: capitalize;
	font-size: 1.4rem;
	font-weight: 500;
	padding: 1.5rem 2rem;
	border-radius: var(--radius-2);
	border: 2px solid var(--color-gray-400);
	outline: none;

	&:focus {
		caret-color: var(--color-main-normal);
		border-color: var(--color-main-normal);
	}
`
