import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '../../utils/yupSchema'
import { inputs } from '../../utils/formData'
import FormInput from './FormInput'
import {
	CheckoutFormContainer,
	CheckoutFormHeader,
	CheckoutFormSectionHeader,
	CheckoutFormSection,
	CheckoutFormWrapper,
	FormInputWrapper,
} from './CheckoutForm.styles'

const CheckoutForm = () => {
	const formOptions = { resolver: yupResolver(validationSchema) }
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(formOptions)

	function onSubmit(data) {
		alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
		reset()
		return false
	}

	return (
		<CheckoutFormWrapper>
			<CheckoutFormHeader>Checkout</CheckoutFormHeader>
			<CheckoutFormContainer onSubmit={handleSubmit(onSubmit)}>
				<CheckoutFormSection>
					<CheckoutFormSectionHeader>billing details</CheckoutFormSectionHeader>
					<FormInputWrapper>
						{inputs.slice(0, 3).map((input, index) => (
							<FormInput
								key={index}
								register={register}
								errors={errors}
								{...input}
							/>
						))}
					</FormInputWrapper>
				</CheckoutFormSection>
				<CheckoutFormSection>
					<CheckoutFormSectionHeader>
						shipping details
					</CheckoutFormSectionHeader>
					<FormInputWrapper>
						{inputs.slice(3, 7).map((input, index) => (
							<FormInput
								key={index}
								register={register}
								errors={errors}
								{...input}
							/>
						))}
					</FormInputWrapper>
				</CheckoutFormSection>
				<CheckoutFormSection>
					<CheckoutFormSectionHeader>payment details</CheckoutFormSectionHeader>
				</CheckoutFormSection>
			</CheckoutFormContainer>
		</CheckoutFormWrapper>
	)
}

export default CheckoutForm
