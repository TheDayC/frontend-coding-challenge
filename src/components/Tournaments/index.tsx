import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';
import selector from './selector';
import Tile from './tile';

const Tournaments: React.FC = () => {
    const { tournaments, searchTerm } = useSelector(selector);
    const searchRegex = new RegExp(`.*?${searchTerm ? searchTerm.toLowerCase() : ''}`);
    const filteredTournaments =
        tournaments && searchTerm && searchTerm.length > 0 ? tournaments.filter(t => searchRegex.test(t.name.toLowerCase())) : tournaments;

    return (
        <div className="tournaments">
            {filteredTournaments ? (
                filteredTournaments.map(tournament => <Tile {...tournament} key={`tournament-${tournament.id}`} />)
            ) : (
                <p className="loading">Loading Tournaments...</p>
            )}
        </div>
    );
};

export default Tournaments;
