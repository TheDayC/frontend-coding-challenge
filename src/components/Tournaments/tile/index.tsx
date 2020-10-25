import React, { useEffect, useState } from 'react';
import { IParticipants } from '../../../types/tournaments';
import Button from '../../Button';

import './styles.scss';

interface ITileProps {
    id: string;
    name: string;
    organizer: string;
    game: string;
    participants: IParticipants | null;
    startDate: string;
}

const Tile: React.FC<ITileProps> = ({id, name, organizer, game, participants, startDate}) => {
    return (
        <div className="tile">
            <p className="name">{name}</p>
            <div className="details">
                <p className="organizer">Organizer: {organizer}</p>
                <p className="game">Game: {game}</p>
                <p className="participants">Participants: {participants?.current}/{participants?.max}</p>
                <p className="startDate">Start: {startDate}</p>
            </div>
            <div className="buttons">
                <Button>Edit</Button>
                <Button>Delete</Button>
            </div>
        </div>
    );
};

export default Tile;
