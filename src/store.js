import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const userReducer = (state = { username: null }, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, username: action.payload };
		default:
			return state;
	}
};

const messageReducer = (state = { messages: [] }, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return { ...state, messages: action.payload };
		default:
			return state;
	}
};

export const store = createStore(
	combineReducers({
		user: userReducer,
		message: messageReducer
	}),
	applyMiddleware(thunk)
);
