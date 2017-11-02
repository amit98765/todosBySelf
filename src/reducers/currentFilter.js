import { CHANGE_FILTER, FILTERS } from '../Actions';

function currentFilter(state = FILTERS.SHOW_ALL, action) {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default currentFilter;