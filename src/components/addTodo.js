import React from 'react';

class AddTodo extends React.Component {
    doCallback = () => {
        console.log(document.getElementById("newTodo").value);
        if (document.getElementById("newTodo").value != "") {
            this.props.onclick(document.getElementById("newTodo").value);

        }
    }
    render() {
        return (
            <div>
                <input type="text" id="newTodo" />
                <input type="button" onClick={this.doCallback} value="Add" />
            </div>
        )
    }
}

export default AddTodo;