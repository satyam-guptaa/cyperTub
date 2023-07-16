import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_DATA } from '../utilities/constants/appconstants';
import axios from 'axios';

const initialState = { data: [], bookmarks: [], loading: false, error: null };

export const fetchAppData = createAsyncThunk(
	'appData/fetchAppData',
	async () => {
		//to mimic api call adding a delay
		await new Promise((resolve) => setTimeout(resolve, 2000));
		const { data } = await axios.get(GET_DATA);
		const res = await data.res;
		return res;
	}
);

export const appDataSlice = createSlice({
	name: 'appData',
	initialState,
	reducers: {
		bookmark(state, action) {
			const updatedData = state.data.map((item) => {
				if (item.title === action.payload.title)
					item.isBookmarked = action.payload.bookmarked;
				return item;
			});
			state.data = updatedData;
		},
	},
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

export const { bookmark } = appDataSlice.actions;
export default appDataSlice.reducer;
