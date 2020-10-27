import store from '../store';
import { GET_TOURNAMENTS_CONFIG, PATCH_TOURNAMENT_CONFIG, CREATE_TOURNAMENT_CONFIG } from '../constants/services';
import { apiFetch } from '../helpers/api';
import { ITournament } from '../types/tournaments';
import { safelyTransform } from '../helpers/transformation';
import { storeTournaments, editTournament, deleteTournament, addTournament } from '../actions/tournaments';
import { API_TOURNAMENTS_URL } from '../constants/api';

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

export function patchTournament(id: string, name: string): Promise<void> {
    const { url, transform } = PATCH_TOURNAMENT_CONFIG;
    const options = {
        body: {
            name
        },
        method: 'PATCH'
    };

    return apiFetch<ITournament>(`${url}/${id}`, options).then(
        res => {
            if (res) {
                const tournament = safelyTransform(res, transform);

                if (tournament) {
                    store.dispatch(editTournament(tournament));
                }
            }
        },
        error => console.warn(error.message)
    );
}

export function removeTournament(id: string): Promise<void> {
    const options = {
        body: {},
        method: 'DELETE'
    };

    return apiFetch<ITournament>(`${API_TOURNAMENTS_URL}/${id}`, options).then(
        res => {
            if (res) {
                store.dispatch(deleteTournament(id));
            }
        },
        error => console.warn(error.message)
    );
}

export function createTournament(name: string): Promise<void> {
    const { url, transform } = CREATE_TOURNAMENT_CONFIG;
    const options = {
        body: {
            name
        },
        method: 'POST'
    };

    return apiFetch<ITournament>(url, options).then(
        res => {
            if (res) {
                const tournament = safelyTransform(res, transform);

                if (tournament) {
                    store.dispatch(addTournament(tournament));
                }
            }
        },
        error => console.warn(error.message)
    );
}
