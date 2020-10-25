import { IServiceMethodConfig } from '../types/services';
import { parseTournamentsResponse } from '../parsers/tournaments';
import { ITournament } from '../types/tournaments';
import { API_TOURNAMENTS_URL } from './api';

export const GET_TOURNAMENTS_CONFIG: IServiceMethodConfig<unknown, ITournament[] | null> = {
    transform: parseTournamentsResponse,
    url: API_TOURNAMENTS_URL
};
