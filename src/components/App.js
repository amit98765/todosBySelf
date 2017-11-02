import React, { Component } from 'react';
import AddTodo from '../containers/Addtodo';
import Todos from '../containers/todos';
import Filters from '../containers/filters';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <Todos />
                <Filters />
            </div>
        );
    }
}

export default App;