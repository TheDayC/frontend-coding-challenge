export interface IParticipants {
    current: number | null;
    max: number | null;
}

export interface ITournament {
    id: string;
    name: string;
    organizer: string;
    game: string;
    participants: IParticipants | null;
    startDate: string;
}
