import React, { useState, useEffect } from 'react';
import { EditField, TodoStyled, TodoContent, TodoText } from './todo.style';
import CardControlPanel from '../card-control-panel/card-control-panel';

const Todo = (props) => {
    const { text = '' } = props;

    const [value, setValue] = useState(text);
    const [isEdit, toggleEdit] = useState(false);
    const [canSave, toggleCanSave] = useState(false);

    const checkEditStatus = () => {
        if (!value) {
            toggleEdit(true)
        }

        !!value ? toggleCanSave(true) : toggleCanSave(false);
    }

    useEffect(() => {
        checkEditStatus();
    });

    return (
        <>
            <TodoStyled>
                <TodoContent>
                    {!isEdit ? <TodoText>{value}</TodoText> : (
                        <EditField value={value} onChange={(e) => setValue(e.target.value)} />
                    )}
                </TodoContent>
                <CardControlPanel value={value} canSave={canSave} isEdit={isEdit} toggleEdit={toggleEdit} {...props} />
            </TodoStyled>
        </>
    )
}

export default Todo;