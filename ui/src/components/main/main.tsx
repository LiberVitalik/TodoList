import React from 'react';
import { Header } from '../header/header';
import { AddTodoButton } from '../add-todo/add-todo';
import { Content } from '../content/content';
import { TodoList } from '../todo-list/todo-list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todos.actions';
import { ITodos } from '../../store/types/types';

export interface IMain {
    todos: ITodos,
    addTodo: () => void;
}

const Main = (props: IMain) => {

    const { addTodo, todos } = props;

    console.log(props);

    const addTodoHandler = () => {
        addTodo();
    }

    return (
        <>
            <Header />
            <Content>
                <TodoList todos={todos} />
                <AddTodoButton addTodoHandler={addTodoHandler} />
            </Content>
        </>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addTodo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);