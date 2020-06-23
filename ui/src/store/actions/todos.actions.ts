import { ACTIONS } from '../types/actions';

export const addTodo = () => {
    return {
        type: ACTIONS.ADD_TODO,
        id: Math.random(),
    }
};

export const toggleTodo = id => {
    return {
        type: ACTIONS.TOGGLE_TODO,
        id,
    }
}

export const saveTodo = (id, text) => {
    return {
        type: ACTIONS.SAVE_TODO,
        id,
        text,
    }
}

export const removeTodo = (id) => {
    return {
        type: ACTIONS.REMOVE_TODO,
        id,
    }
}

export const updateTodos = () => {
    return {
        type: ACTIONS.UPDATE_TODOS,
    }
}