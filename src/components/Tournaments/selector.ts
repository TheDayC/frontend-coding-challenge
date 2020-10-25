import { createSelector } from 'reselect';

import { selectTournaments } from '../../selectors';

const selector = createSelector([selectTournaments], tournaments => ({
    tournaments
}));

export default selector;
