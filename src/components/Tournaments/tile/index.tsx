import React, { useEffect, useState } from 'react';
import { IParticipants } from '../../../types/tournaments';
import Button from '../../Button';
import H6 from '../../H6';

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
            <H6>{name}</H6>
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
