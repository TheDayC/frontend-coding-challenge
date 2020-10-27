import { IAppState } from '../types/store';

export const selectTournaments = (state: IAppState) => state.tournaments;
export const selectSearchTerm = (state: IAppState) => state.search;
