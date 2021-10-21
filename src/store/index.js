import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';
import detailsReducer from './reducers/details';
import basketReducer from './reducers/basket';
import apiReducer from './reducers/apiData';

const rootReducer = combineReducers({
	app: appReducer,
	details: detailsReducer,
	basket: basketReducer,
	apiData: apiReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));