import { SearchActionTypes} from '../enums/actions';
import { IActionWithPayload } from '../types/actions';

export const ACTION_SET_SEARCH_TERM = (payload: string) => {
    const action = {
        type: SearchActionTypes.SET_SEARCH_TERM,
        payload
    };

    return action;
};

export function setSearchTerm(payload: string): IActionWithPayload<SearchActionTypes, string> {
    return ACTION_SET_SEARCH_TERM(payload);
}