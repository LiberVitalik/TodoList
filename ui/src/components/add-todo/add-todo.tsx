import React from 'react';
import { AddTodoButtonStyled } from './add-todo.style';
import { Icons } from '../../icons/icons';
import { IAddTodo } from './add-todo.types';

export const AddTodoButton = (props: IAddTodo) => {

    const { addTodoHandler } = props;

    return (
        <>
            <AddTodoButtonStyled onClick={addTodoHandler}>
                <Icons.Plus />
            </AddTodoButtonStyled>
        </>
    )
}