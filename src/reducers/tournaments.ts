import { TournamentActionTypes } from '../enums/actions';
import { createTournamentState } from '../helpers/store';
import { IActionWithPayload } from '../types/actions';
import { ITournament } from '../types/tournaments';

type tournamentActionType = ITournament[];

export default function tournaments(
    state: ITournament[] | null = createTournamentState(),
    action: IActionWithPayload<TournamentActionTypes, tournamentActionType>
): ITournament[] | null {
    switch (action.type) {
        case TournamentActionTypes.STORE_TOURNAMENTS:
            return action.payload;
        default:
            return state;
    }
}
