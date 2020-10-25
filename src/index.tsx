import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import { fetchTournaments } from './services/tournaments';
import Tournaments from './components/Tournaments';

const App: React.FC = () => {
    // Make a single call on mount to populate state with tournaments.
    useEffect(() => {
        fetchTournaments();
    }, []);

    return (
        <Container>
            <H4>FACEIT Tournaments</H4>
            <Tournaments />
        </Container>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root')
);
