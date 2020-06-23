import { ACTIONS } from '../types/actions';

const initialSate = JSON.parse(localStorage.getItem("todos")) || [];

export const todosReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case ACTIONS.REMOVE_TODO:
            state = state.filter(todo => todo.id !== action.id);
            return getUpdateTodos(state);
        case ACTIONS.SAVE_TODO:
            state = state.map(todo => {
                return todo.id === action.id ? { ...todo, text: action.text } : todo;
            }
            )
            return getUpdateTodos(state);
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case ACTIONS.UPDATE_TODOS:
            return getUpdateTodos(state);
        default:
            return state
    }
}


function getUpdateTodos(state) {
    localStorage.setItem('todos', JSON.stringify(state));
    return JSON.parse(localStorage.getItem('todos'));
}