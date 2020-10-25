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

// Action Creators
export function storeFixture(payload: ITournament[]): IActionWithPayload<TournamentActionTypes, ITournament[]> {
    return ACTION_STORE_TOURNAMENTS(payload);
}