import { combineReducers } from 'redux';

import tournaments from './tournaments';

import { IAppState } from '../types/store';

const rootReducer = combineReducers<IAppState>({
    tournaments
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
