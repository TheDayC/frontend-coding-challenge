import {IAppState} from '../types/store';

// Create default tournament state.
export function createTournamentState(): null {
    return null;
}

// Create initial state
export function createInitialState(): IAppState {
    return {
        tournaments: createTournamentState()
    };
}
