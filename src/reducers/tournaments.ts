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
            const tempState = state;
            
            if (tempState && isTournament(editedTournament)) {
                const editedIndex = tempState.findIndex(t => t.id === editedTournament.id);
                
                tempState[editedIndex] = editedTournament;
            }

            return tempState;
        default:
            return state;
    }
}
