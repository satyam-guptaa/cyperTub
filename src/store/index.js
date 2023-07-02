import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './appDataSlice';

export default configureStore({
	reducer: { appdata: appDataReducer },
});
