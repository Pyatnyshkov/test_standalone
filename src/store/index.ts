import {configureStore, combineReducers} from "@reduxjs/toolkit";
import appReducer from './reducers/app';
import detailsReducer from './reducers/details';
import basketReducer from './reducers/basket';
import apiReducer from './reducers/apiData';
import customerReducer from './reducers/customer';

const reducer = combineReducers({
	app: appReducer,
	details: detailsReducer,
	basket: basketReducer,
	apiData: apiReducer,
	customer: customerReducer
});

export const store = configureStore({
	reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;