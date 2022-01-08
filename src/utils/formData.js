export const inputs = [
	{
		name: 'name',
		type: 'text',
		placeholder: 'alexie ward',
		label: 'name',
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'alexie@gmail.com',
		label: 'email address',
	},
	{
		name: 'phone',
		type: 'text',
		placeholder: '+1 202-555-0136',
		label: 'phone number',
	},
	{
		name: 'address',
		type: 'text',
		placeholder: '1137 Williams Avenue',
		label: 'address',
		width: '100%'
	},
	{
		name: 'zipCode',
		type: 'text',
		placeholder: '10001',
		label: 'zip code',
	},
	{
		name: 'city',
		type: 'text',
		placeholder: 'new york',
		label: 'city',
	},
	{
		name: 'country',
		type: 'text',
		placeholder: 'united states',
		label: 'country',
	},
	{
		name: 'paymentMode',
		type: 'radio',
		id: 'emoney',
		label: 'e-Money',
		value: 'e-Money',
		defaultChecked: true,
	},
	{
		name: 'paymentMode',
		type: 'radio',
		id: 'cash',
		label: 'Cash on Delivery',
		value: 'Cash on Delivery',
	},
	{
		name: 'eMoneyNumber',
		type: 'text',
		placeholder: '2385219935',
		label: 'e-Money Number',
	},
	{
		name: 'eMoneyPin',
		type: 'text',
		placeholder: '6891',
		label: 'e-Money PIN',
	},
]
