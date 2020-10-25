import { ITournament } from './tournaments';

export interface IAppState {
    tournaments: ITournament[] | null;
}
