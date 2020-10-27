import { ITournament } from '../types/tournaments';
import { IActionWithPayload } from '../types/actions';
import { TournamentActionTypes } from '../enums/actions';

// Actions
export const ACTION_STORE_TOURNAMENTS = (payload: ITournament[]) => {
    const action = {
        type: TournamentActionTypes.STORE_TOURNAMENTS,
        payload
    };

    return action;
};

export const ACTION_EDIT_TOURNAMENT = (payload: ITournament) => {
    const action = {
        type: TournamentActionTypes.EDIT_TOURNAMENT,
        payload
    };

    return action;
};

export const ACTION_DELETE_TOURNAMENT = (payload: string) => {
    const action = {
        type: TournamentActionTypes.DELETE_TOURNAMENT,
        payload
    };

    return action;
};

// Action Creators
export function storeTournaments(payload: ITournament[]): IActionWithPayload<TournamentActionTypes, ITournament[]> {
    return ACTION_STORE_TOURNAMENTS(payload);
}

export function editTournament(payload: ITournament): IActionWithPayload<TournamentActionTypes, ITournament> {
    return ACTION_EDIT_TOURNAMENT(payload);
}

export function deleteTournament(payload: string): IActionWithPayload<TournamentActionTypes, string> {
    return ACTION_DELETE_TOURNAMENT(payload);
}
