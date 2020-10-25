import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createInitialState } from '../helpers/store';
import rootReducer from '../reducers';

const store = createStore(rootReducer, createInitialState(), composeWithDevTools(applyMiddleware(thunk)));

export default store;
