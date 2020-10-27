import React from 'react';

import './styles.scss';
import Input from '../Input';
import Button from '../Button';

const SearchAndCreate: React.FC = () => {
    return (
        <div className="searchAndCreate">
            <Input placeholder="Search tournament..." />
            <Button>Create Tournament</Button>
        </div>
    );
};

export default SearchAndCreate;
