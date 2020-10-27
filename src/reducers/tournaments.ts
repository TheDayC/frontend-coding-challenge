import { TournamentActionTypes } from '../enums/actions';
import { createTournamentState } from '../helpers/store';
import { IActionWithPayload } from '../types/actions';
import { ITournament } from '../types/tournaments';
import { isTournament, isTournaments } from '../helpers/typeguards';

type tournamentActionType = ITournament[] | ITournament | null;

export default function tournaments(
    state: ITournament[] | null = createTournamentState(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: IActionWithPayload<TournamentActionTypes, tournamentActionType> // Ideally this would be typed but for speed forcing any.
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
        default:
            return state;
    }
}
