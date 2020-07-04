import React, { useState } from 'react';
import { EditField, TodoStyled } from './todo.style';
import { bindActionCreators } from 'redux';
import { removeTodo, saveTodo, updateTodos } from '../../store/actions/todos.actions';
import { connect } from 'react-redux';
import { Popover } from '../popover/popover';
import { Icons } from '../../icons/icons';
import { CardControlPanel } from '../card-control-panel/card-control-panel';

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
                    <EditField value={value} onChange={(e) => setValue(e.target.value)} />
                )}

                <CardControlPanel>
                    <button onClick={saveHandler}>
                        <Icons.ChevronOk />
                    </button>
                    <button onClick={openEditMode}>
                        <Icons.Pencil />
                    </button>
                    <Popover isPopover={isPopover}
                             setPopover={setPopover}
                             clickableElement={
                                 <button onClick={togglePopover}>
                                     <Icons.Trash />
                                 </button>
                             }
                    >
                        <button onClick={removeTodoHandler}>
                            Ok
                        </button>
                        <button onClick={togglePopover}>
                            No
                        </button>
                    </Popover>
                </CardControlPanel>
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