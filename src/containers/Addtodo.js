import { connect } from 'react-redux';
import { addTodo as addTodoAction }  from '../actions';
import Addtodo from '../components/addTodo';
import { bindActionCreators } from 'redux';
import React from 'react';


class AddTodoContainer extends React.Component {
    render() {
        const { onClick } = this.props;
        return (
            <ul>
                <Addtodo onclick={onClick} />
            </ul>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (val) => dispatch(addTodoAction(val))
    }
};

const AddTodos = connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);
export default AddTodos; 
