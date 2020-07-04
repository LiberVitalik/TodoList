import React, { useState } from 'react';
import { ActionButtonStyled, CardControlPanelStyled } from './card-control-panel.styles';
import { Icons } from '../../icons/icons';
import { Popover } from '../popover/popover';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeTodo, saveTodo, updateTodos } from '../../store/actions/todos.actions';

const CardControlPanel = props => {

    const { value, isEdit, canSave, toggleEdit, id, saveTodo, removeTodo, updateTodos } = props;

    const [isPopover, setPopover] = useState(false);


    const closeEditMode = () => {
        toggleEdit(false);
    }

    const toggleEditMode = () => {
        toggleEdit(!isEdit);
    }

    const saveHandler = () => {
        if (!canSave) {
            return;
        }

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
        <CardControlPanelStyled>
            <Popover isPopover={isPopover}
                     setPopover={setPopover}
                     clickableElement={
                         <ActionButtonStyled onClick={togglePopover}>
                             <Icons.Trash />
                         </ActionButtonStyled>
                     }
            >
                <button onClick={removeTodoHandler}>
                    Ok
                </button>
                <button onClick={togglePopover}>
                    No
                </button>
            </Popover>
            <ActionButtonStyled onClick={toggleEditMode}>
                {!isEdit ? <Icons.Pencil /> : <Icons.CloseIcon />}
            </ActionButtonStyled>
            {isEdit &&
            <ActionButtonStyled onClick={saveHandler}>
                <Icons.ChevronOk />
            </ActionButtonStyled>
            }
        </CardControlPanelStyled>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardControlPanel);