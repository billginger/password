import { combineReducers, createStore } from 'redux';
import { lang } from '../i18n';

// Action
const setLanguage = payload => (
	{ type: 'SetLanguage', payload }
);

// Reducer
const language = (state = lang, action) => (
	action.type == 'SetLanguage' ? action.payload : state
);
const reducer = combineReducers({
	language
});

// Store
const store = createStore(reducer);

export { setLanguage, store };
