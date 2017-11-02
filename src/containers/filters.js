import React from 'react';
import { FILTERS } from '../Actions';

class Filtes extends React.Component {
    render() {
        return (<div>
            Show: {' '}
            <FilterComponent filter={FILTERS.SHOW_ALL} text="All"
                onclick={this.props.onClick}
                currentFilter={this.props.currentFilter} />

            <FilterComponent filter={FILTERS.SHOW_ACTIVE} text="Active" onclick={this.props.onClick}
                currentFilter={this.props.currentFilter} />

            <FilterComponent filter={FILTERS.SHOW_COMPLETED} text="Completed" onclick={this.props.onClick}
                currentFilter={this.props.currentFilter} />
        </div>)
    }
}

mapStateToProps = (state) => {
    return {
        currentFilter: state.currentFilter
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)