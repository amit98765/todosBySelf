import { connect } from 'react-redux';
import { FILTERS } from '../Actions';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions/index';
import React from 'react';
import VisibleTodosComponent from '../components/VisibleTodosComponent';


const getVisibleTodos = (todos, filter) => {
    switch (filter) {

        case FILTERS.SHOW_ALL:
            console.log("cak");
            return todos;

        case FILTERS.SHOW_ACTIVE:
            console.log("cak2");
            return todos.filter(todo => {
                if (todo.completed == false)
                    return todo;
            })
        case FILTERS.SHOW_COMPLETED:
            return todos.filter(todo => {
                if (todo.completed == true)
                    return todo;
            })

    }
}

class todos extends React.Component {

    render() {

        return (
            <VisibleTodosComponent todos={this.props.todos} onclick={this.props.onClick} />
        )


    }
}





const mapStateToProps = (state) => {
    return {
        filter: state.currentFilter,
        todos: getVisibleTodos(state.todos, state.currentFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todos);