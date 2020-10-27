import { createSelector } from 'reselect';

import { selectTournaments, selectSearchTerm } from '../../selectors';

const selector = createSelector([selectTournaments, selectSearchTerm], (tournaments, searchTerm) => ({
    tournaments,
    searchTerm
}));

export default selector;
