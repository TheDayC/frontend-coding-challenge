import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';
import selector from './selector';
import Tile from './tile';

const Tournaments: React.FC = () => {
    const { tournaments } = useSelector(selector);

    return (
        <div className="tournaments">
            {tournaments ? tournaments.map(tournament => <Tile {...tournament} key={`tournament-${tournament.id}`} />) : <p>Loading Tournaments</p>}
        </div>
    );
};

export default Tournaments;
