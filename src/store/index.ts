import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createInitialState } from '../helpers/store';
import rootReducer from '../reducers';

const store = createStore(rootReducer, createInitialState(), applyMiddleware(thunk));

export default store;
