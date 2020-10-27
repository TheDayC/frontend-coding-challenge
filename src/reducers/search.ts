import { SearchActionTypes } from '../enums/actions';
import { createTournamentState } from '../helpers/store';
import { IActionWithPayload } from '../types/actions';

export default function tournaments(state: string | null = createTournamentState(), action: IActionWithPayload<SearchActionTypes, string>): string | null {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH_TERM:
            return action.payload;
        default:
            return state;
    }
}
