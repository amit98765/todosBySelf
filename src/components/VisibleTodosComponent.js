import React from 'react';

class VisibleTodosComponent extends React.Component {
    doCallBack = (id) => {
        this.props.onclick(id);
    }

    render() {
        console.log("----");
        console.log(this.props);
        console.log("----");
        const output = this.props.todos.map((todo) => {
            return (<li key={todo.id} onClick={() => this.doCallBack(todo.id)}
                style={{ textDecoration: (todo.completed) ? 'line-through' : 'none' }}>
                {todo.text}
            </li>
            )
        })

        return (output);
    }
}

export default VisibleTodosComponent;