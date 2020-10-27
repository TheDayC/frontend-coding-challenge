import { TournamentActionTypes } from '../enums/actions';
import { createTournamentState } from '../helpers/store';
import { IActionWithPayload } from '../types/actions';
import { ITournament } from '../types/tournaments';
import { isString, isTournament, isTournaments } from '../helpers/typeguards';
import { removeTournamentFromState } from '../helpers/arrays';

type tournamentActionType = ITournament[] | ITournament | string | null;

export default function tournaments(
    state: ITournament[] | null = createTournamentState(),
    action: IActionWithPayload<TournamentActionTypes, tournamentActionType>
): ITournament[] | null {
    switch (action.type) {
        case TournamentActionTypes.STORE_TOURNAMENTS:
            const allTournaments = action.payload;
            if (isTournaments(allTournaments)) {
                return allTournaments;
            } else {
                return state;
            }
        case TournamentActionTypes.EDIT_TOURNAMENT:
            const editedTournament = action.payload;

            if (state && isTournament(editedTournament)) {
                return state.map(item => {
                    if (item.id !== editedTournament.id) {
                        return item;
                    }

                    return {
                        ...item,
                        name: editedTournament.name
                    };
                });
            }

            return state;
        case TournamentActionTypes.DELETE_TOURNAMENT:
            const tournamentId = action.payload;

            if (state && isString(tournamentId)) {
                // Don't want to mutate state directly so abstract to a helper and return data.
                return removeTournamentFromState(state, tournamentId);
            }

            return state;
        default:
            return state;
    }
}
