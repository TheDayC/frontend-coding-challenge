import store from '../store';
import { GET_TOURNAMENTS_CONFIG } from '../constants/services';
import { apiFetch } from '../helpers/api';
import { ITournament } from '../types/tournaments';
import { safelyTransform } from '../helpers/transformation';
import { storeTournaments } from '../actions/tournaments';

export function fetchTournaments(): Promise<void> {
    const { url, transform } = GET_TOURNAMENTS_CONFIG;
    const options = {
        body: {},
        method: 'GET'
    };

    return apiFetch<ITournament[]>(url, options).then(
        res => {
            if (res) {
                const tournaments = safelyTransform(res, transform);

                if (tournaments) {
                    store.dispatch(storeTournaments(tournaments));
                }
            }
        },
        error => console.warn(error.message)
    );
}
