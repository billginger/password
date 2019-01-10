import { combineReducers, createStore } from 'redux';

// Action
const setLanguage = payload => (
	{ type: 'SetLanguage', payload }
);

// Reducer
const language = (state = '', action) => (
	action.type == 'SetLanguage' ? action.payload : state
);
const reducer = combineReducers({
	language
});

// Store
const store = createStore(reducer);

export { setLanguage, store };
