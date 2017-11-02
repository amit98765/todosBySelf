import { combineReducers } from 'redux';
import currentFilter from './currentFilter';
import todos from './todos';

const todoApp = combineReducers({ currentFilter, todos });

export default todoApp;