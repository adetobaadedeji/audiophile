import React from 'react'
import styled from 'styled-components'

const FormInput = (props) => {
	const { label, name, register, errors, ...inputProps } = props

	return (
		<FormInputContainer>
			<FormLabel>
				<Label htmlFor={name}>{label}</Label>
				<Small role='alert'>{errors[name]?.message}</Small>
			</FormLabel>
			<Input {...inputProps} {...register(name)}></Input>
		</FormInputContainer>
	)
}

export default FormInput

const FormInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
const FormLabel = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const Label = styled.label`
	text-transform: capitalize;
`
const Small = styled.small``

const Input = styled.input`
	width: 100%;
	text-transform: capitalize;
`
