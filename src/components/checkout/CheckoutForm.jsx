import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '../../utils/yupSchema'
import { inputs } from '../../utils/formData'
import TextInput from './TextInput'
import RadioInput from './RadioInput'
import {
	CashOnDelivery,
	Image,
	Description,
	FormContainer,
	FormHeader,
	FormSectionHeader,
	FormSection,
	FormWrapper,
	InputsWrapper,
} from './CheckoutForm.styles'

const CheckoutForm = () => {
	const formOptions = { resolver: yupResolver(validationSchema) }
	const {
		register,
		handleSubmit,
		watch,
		trigger,
		reset,
		formState: { errors },
	} = useForm(formOptions)

	useEffect(() => {
		trigger('paymentMode')
	}, [trigger])

	function onSubmit(data) {
		alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
		reset()
		return false
	}

	const paymentMode = watch('paymentMode')

	return (
		<FormWrapper>
			<FormHeader>Checkout</FormHeader>
			<FormContainer id='checkoutForm' onSubmit={handleSubmit(onSubmit)}>
				<FormSection>
					<FormSectionHeader>billing details</FormSectionHeader>
					<InputsWrapper>
						{inputs.slice(0, 3).map((input, index) => (
							<TextInput
								key={index}
								register={register}
								errors={errors}
								{...input}
							/>
						))}
					</InputsWrapper>
				</FormSection>
				<FormSection>
					<FormSectionHeader>shipping info</FormSectionHeader>
					<InputsWrapper>
						{inputs.slice(3, 7).map((input, index) => (
							<TextInput
								key={index}
								register={register}
								errors={errors}
								{...input}
							/>
						))}
					</InputsWrapper>
				</FormSection>
				<FormSection>
					<FormSectionHeader>payment details</FormSectionHeader>
					<InputsWrapper>
						<h4>Payment Method</h4>
						<section>
							{inputs.slice(7, 9).map((input, index) => (
								<RadioInput
									key={index}
									register={register}
									errors={errors}
									{...input}
								/>
							))}
						</section>
					</InputsWrapper>
				</FormSection>
				<FormSection>
					{paymentMode === 'e-Money' && (
						<InputsWrapper>
							{inputs.slice(9, 11).map((input, index) => (
								<TextInput
									key={index}
									register={register}
									errors={errors}
									{...input}
								/>
							))}
						</InputsWrapper>
					)}
					{paymentMode === 'Cash on Delivery' && (
						<CashOnDelivery>
							<Image src='/images/icon-cash-on-delivery.svg' alt='cash logo' />
							<Description>
								The ‘Cash on Delivery’ option enables you to pay in cash when
								our delivery courier arrives at your residence. Just make sure
								your address is correct so that your order will not be
								cancelled.
							</Description>
						</CashOnDelivery>
					)}
				</FormSection>
			</FormContainer>
		</FormWrapper>
	)
}

export default CheckoutForm
