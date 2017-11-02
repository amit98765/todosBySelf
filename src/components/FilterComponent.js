import React from 'react';

class FilterComponent extends React.Component {
    render() {

        if (this.props.active) {
            return (<span>{this.props.text} </span>)
        }
        else {
            return (<span onClick={this.props.onclick}
            >
                {this.props.text}
            </span>
            )
        }


    }
}

export default FilterComponent;