import * as Yup from 'yup'

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Must be more then one character')
		.required('Name is required'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	phone: Yup.string()
		.matches(phoneRegex, 'Invalid phone.')
		.required('Phone number is required'),
	address: Yup.string()
		.min(2, 'Must be more then one character')
		.required('Address is required'),
	zipCode: Yup.number().integer().min(5).required('Zip Code is required'),
	city: Yup.string()
		.min(2, 'Must be more then one character')
		.required('City is required'),
	country: Yup.string()
		.min(2, 'Must be more then one character')
		.required('Country is required'),
})
