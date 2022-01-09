import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'


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
	margin-bottom: 1rem;
`
const Input = styled.input``

const Label = styled.label`
	width: 100%;
	font-size: 1.4rem;
	font-weight: bold;
	line-height: 1.1;
	display: grid;
	grid-template-columns: 1em auto;
	gap: 1em;
	border-radius: var(--radius-2);
	border: 2px solid var(--color-gray-400);
	padding: 1.5rem 2rem;

	${screenSize.sm`
    font-size: 0.94rem;
		padding: 1.1rem 1.5rem;

  `}

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
		width: 16px;
		height: 16px;
		border: 2px solid var(--color-gray-400);
		border-radius: 50%;
		display: grid;
		place-content: center;
	}

	/* Focusing the radio with a keyboard will show a solid orange line. */
	input[type='radio']:focus-visible {
		outline: 2px solid var(--color-main-normal);
	}
	/* Focusing the button with a mouse, touch, or stylus will show no outline */
	input[type='radio']:focus:not(:focus-visible) {
		outline: none;
	}

	input[type='radio']:checked {
		border: 2px solid var(--color-main-normal);
	}

	input[type='radio']::before {
		content: '';
		width: 8px;
		height: 8px;
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
