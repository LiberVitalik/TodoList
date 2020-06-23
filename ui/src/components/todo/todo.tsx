import React, { useState } from 'react';
import { TodoStyled } from './todo.style';
import { bindActionCreators } from 'redux';
import { removeTodo, saveTodo, updateTodos } from '../../store/actions/todos.actions';
import { connect } from 'react-redux';
import { Popover } from '../popover/popover';

const Todo = (props) => {
    const { text = '', id, saveTodo, removeTodo, updateTodos } = props;

    const [value, setValue] = useState(text);
    const [isEdit, toggleEdit] = useState(false);
    const [isPopover, setPopover] = useState(false);

    const closeEditMode = () => {
        toggleEdit(false);
    }

    const openEditMode = () => {
        toggleEdit(true);
    }

    const saveHandler = () => {
        closeEditMode();
        saveTodo(id, value);
        updateTodos();
    }

    const removeTodoHandler = () => {
        removeTodo(id);
        setPopover(false);
    }

    const togglePopover = () => {
        setPopover(!isPopover);
    }

    return (
        <>
            <TodoStyled>
                {!isEdit ? <div>{value}</div> : (
                    <input
                        type="text" value={value} onChange={(e) => setValue(e.target.value)}
                    />
                )}


                <button onClick={saveHandler}>Save</button>
                <button onClick={openEditMode}>edit</button>
                <Popover isPopover={isPopover}
                         setPopover={setPopover}
                         clickableElement={
                             <button onClick={togglePopover}>remove</button>
                         }
                >
                    <button onClick={removeTodoHandler}>YES</button>
                    <button onClick={togglePopover}>NO</button>
                </Popover>
            </TodoStyled>
        </>
    )
}

const mapStateToProps = (state) => ({
    todo: state.todo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveTodo,
    removeTodo,
    updateTodos,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);