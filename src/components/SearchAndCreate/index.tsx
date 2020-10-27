import React from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss';
import Input from '../Input';
import Button from '../Button';

import { setSearchTerm } from '../../actions/search';
import { createTournament } from '../../services/tournaments';

const SearchAndCreate: React.FC = () => {
    const dispatch = useDispatch();

    const searchOnKeyUp = (e: React.KeyboardEvent) => {
        const searchTerm = (e.target as HTMLInputElement).value;

        dispatch(setSearchTerm(searchTerm));
    };

    const showCreatePrompt = () => {
        const newTournamentName = prompt('Tournament Name:');

        if (newTournamentName) {
            createTournament(newTournamentName);
        }
    };

    return (
        <div className="searchAndCreate">
            <Input placeholder="Search tournament..." onKeyUp={searchOnKeyUp} />
            <Button onClick={showCreatePrompt}>Create Tournament</Button>
        </div>
    );
};

export default SearchAndCreate;
