import React from 'react';
import { TodoListStyled } from './todo-list.style';
import { ITodoList } from './todo-list.types';
import Todo from '../todo/todo';

export const TodoList = (props: ITodoList) => {

    const getTodos = () => {
        if (!Array.isArray(props.todos)) {
            return;
        }
        return props.todos.map(todo => <Todo key={todo.id} {...todo} />);
    }

    return (
        <>
            <TodoListStyled>
                {getTodos()}
            </TodoListStyled>
        </>
    )
}