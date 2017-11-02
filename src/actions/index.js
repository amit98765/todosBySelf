import { ADD_TODO, TOGGLE_TODO, CHANGE_FILTER } from '../Actions';

let id = 0;
export function addTodo(val) {
    id++;
    return {
        type: ADD_TODO,
        id: id,
        text: val,
        completed: false
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export function changeFilter(val) {
    return {
        type: CHANGE_FILTER,
        filter: val
    }
}