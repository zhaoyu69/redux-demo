import { connect } from 'react-redux'
import {getTodoList, getTodoListError, toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import axios from 'axios';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        //todos: getVisibleTodos(state.todos, state.visibilityFilter)
        todos: getVisibleTodos(state.todos, ownProps.filter)
    };
};

const mapDispatchToProps = dispatch => {
    dispatch((dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(getTodoList(response.data))
            })
            .catch((error) => {
                dispatch(getTodoListError(error))
            })
    });
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList