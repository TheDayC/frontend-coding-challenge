import { ITournament } from '../types/tournaments';

export function removeTournamentFromState(state: ITournament[], id: string): ITournament[] {
    return state.filter(tournament => tournament.id !== id);
}

export function addTournamentToState(state: ITournament[], tournament: ITournament): ITournament[] {
    return [...state, tournament];
}
