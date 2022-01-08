import * as Yup from 'yup'

// const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/

// either exactly 5 or exactly 9 numbers or 9 numbers with dash (-) after the fifth number
// const zipCodeRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/
const zipCodeRegex = /(^\d{5,6}$)/
const moneyNumRegex = /(^\d{10}$)/
const pinRegex = /(^\d{4}$)/

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.matches(/^([^0-9]*)$/, 'should not contain numbers')
		.min(2, 'Must be more then one character'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	phone: Yup.string()
		.required('Phone number is required')
		.matches(phoneRegex, 'Invalid phone. 10 - 14 digits required'),
	address: Yup.string()
		.required('Address is required')
		.min(10, 'Must be more then 10 characters'),
	zipCode: Yup.string()
		.required('Zip Code is required')
		.matches(zipCodeRegex, 'Invalid ZipCode. 5 or 6 digits required'),
	city: Yup.string()
		.required('City is required')
		.min(2, 'Must be more then one character'),
	country: Yup.string()
		.required('Country is required')
		.min(2, 'Must be more then one character'),
	// paymentMode: Yup.string().required,
	eMoneyNumber: Yup.string().when('paymentMode', {
		is: (value) => value === 'e-Money',
		then: Yup.string()
			.required('E-money number is required')
			.matches(moneyNumRegex, 'Invalid numbers. 10 digits required'),
		otherwise: Yup.string().notRequired(),
	}),
	eMoneyPin: Yup.string().when('paymentMode', {
		is: (value) => value === 'e-Money',
		then: Yup.string()
			.required('E-money pin is required')
			.matches(pinRegex, 'Invalid Pin. 4 digits required'),
		otherwise: Yup.string().notRequired(),
	}),
})
