import React from 'react'
import styled from 'styled-components'

const RadioInput = (props) => {
	const { label, name, register, errors, ...inputProps } = props

	return (
		<RadioInputContainer>
			<Label>
				<Input {...inputProps} {...register(name)} />
				{label}
			</Label>
		</RadioInputContainer>
	)
}

export default RadioInput

const RadioInputContainer = styled.div`
	width: 100%;
`
const Input = styled.input``

const Label = styled.label`
	font-size: 1.4rem;
	font-weight: bold;
	line-height: 1.1;
	display: grid;
	grid-template-columns: 1em auto;
	gap: 1em;
	border-radius: var(--radius-2);
	border: 2px solid var(--color-gray-400);
	padding: 1.5rem 2rem;

	&:focus-within {
		border: 2px solid var(--color-main-normal);
	}

	input[type='radio'] {
		-webkit-appearance: none;
		appearance: none;
		background-color: #fff;
		margin: 0;
		font: inherit;
		color: var(--color-gray-400);
		width: 1.15em;
		height: 1.15em;
		border: 0.12em solid var(--color-gray-400);
		border-radius: 50%;
		display: grid;
		place-content: center;
	}

	/* input[type='radio']:focus {
		border: 0.12em solid var(--color-main-normal);
	} */

	input[type='radio']:checked {
		border: 0.12em solid var(--color-main-normal);
	}

	input[type='radio']::before {
		content: '';
		width: 0.6em;
		height: 0.6em;
		border-radius: 50%;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--color-main-normal);
		background-color: var(--color-main-normal);
	}

	input[type='radio']:checked::before {
		transform: scale(1);
	}
`

