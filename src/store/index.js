import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';
import detailsReducer from './reducers/details';
import basketReducer from './reducers/basket';

const rootReducer = combineReducers({
	app: appReducer,
	details: detailsReducer,
	basket: basketReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));