import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';

const userReducer = (state = { username: null }, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, username: action.payload }
        default:
            return state;
    }
}

export const store = createStore(
    combineReducers({
        user: userReducer,
    }),
    applyMiddleware(thunk)
);
