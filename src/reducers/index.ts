import { combineReducers } from 'redux';

import tournaments from './tournaments';
import search from './search';

import { IAppState } from '../types/store';

const rootReducer = combineReducers<IAppState>({
    tournaments,
    search
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
