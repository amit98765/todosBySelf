import React from 'react';

class AddTodo extends React.Component {
    doCallback = () => {
        var field = document.getElementById("newTodo");
        console.log(document.getElementById("newTodo").value);
        if (field.value != "") {
            this.props.onclick(field.value);
            field.value = "";
            field.focus();
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