import React from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss';
import Input from '../Input';
import Button from '../Button';

import {setSearchTerm} from '../../actions/search';

const SearchAndCreate: React.FC = () => {
    const dispatch = useDispatch();
    const searchOnKeyUp = (e: React.KeyboardEvent) => {
        const searchTerm = (e.target as HTMLInputElement).value;
        
        dispatch(setSearchTerm(searchTerm));
    };

    return (
        <div className="searchAndCreate">
            <Input placeholder="Search tournament..." onKeyUp={searchOnKeyUp} />
            <Button>Create Tournament</Button>
        </div>
    );
};

export default SearchAndCreate;
