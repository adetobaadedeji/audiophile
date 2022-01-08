import { createSlice } from '@reduxjs/toolkit'

export const formDataSlice = createSlice({
	name: 'formData',
	initialState: {
		data: null
	},
	reducers: {
		getFormData: (state, action) => {
			state.data = action.payload
		},
	},
})

export const { getFormData } = formDataSlice.actions

export const formDataSelector = (state) => state.formData.data

export default formDataSlice.reducer
