import { ITournament, IParticipants } from '../types/tournaments';
import { parseAsNumber, parseAsString, safelyParse } from '../helpers/parsing';
import { isTournaments, isParticipants } from '../helpers/typeguards';

function parseAsParticipents<F>(data: unknown, fallback: F): IParticipants | F {
    if (isParticipants(data)) {
        return {
            current: safelyParse(data, 'current', parseAsNumber, null),
            max: safelyParse(data, 'max', parseAsNumber, null)
        };
    } else {
        return fallback;
    }
}

function parseAsTournament(data: unknown): ITournament {
    return {
        id: safelyParse(data, 'id', parseAsString, ''),
        name: safelyParse(data, 'name', parseAsString, ''),
        organizer: safelyParse(data, 'organizer', parseAsString, ''),
        game: safelyParse(data, 'game', parseAsString, ''),
        participants: safelyParse(data, 'participants', parseAsParticipents, null),
        startDate: safelyParse(data, 'startDate', parseAsString, '')
    };
}

export function parseTournamentsResponse(res: unknown): ITournament[] | null {
    if (isTournaments(res)) {
        return res.length > 0 ? res.map(parseAsTournament) : null;
    } else {
        return null;
    }
}
