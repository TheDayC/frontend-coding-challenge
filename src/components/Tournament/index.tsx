import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getFixtures } from '../../services/fixtures';
import { Phase } from '../../enums/stats';
import Navigation from './navigation';
import Stats from './stats';

import './styles.scss';
import selector from './selector';

const Tournament: React.FC = () => {
    const { hasMatch } = useSelector(selector);
    const [currentPhase, savePhase] = useState(Phase.FullMatch);

    useEffect(() => {
        getFixtures();
    }, []);

    const handleSwitchTab = (phase: Phase) => {
        savePhase(phase);
    }

    return (
        <main className="body">
            <h1>General</h1>
            <Navigation switchTabs={handleSwitchTab} activeTab={currentPhase} />
            {hasMatch && <Stats phase={currentPhase} />}
        </main>
    );
};

export default Tournament;
