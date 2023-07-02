import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_DATA } from '../utilities/constants/appconstants';
import axios from 'axios';

const initialState = { data: [], loading: false, error: null };

export const fetchAppData = createAsyncThunk(
	'appData/fetchAppData',
	async () => {
		const { data } = await axios.get(GET_DATA);
		return data.res;
	}
);

export const appDataSlice = createSlice({
	name: 'appData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAppData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchAppData.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchAppData.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default appDataSlice.reducer;
