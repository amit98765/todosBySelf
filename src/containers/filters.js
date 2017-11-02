import React from 'react';
import { FILTERS } from '../Actions';
import { changeFilter } from '../actions/index';
import FilterComponent from '../components/FilterComponent';
import { connect } from 'react-redux';

class Filters extends React.Component {
    render() {
        return (<div>
            Show: {' '}
            <FilterComponent text="All"
                onclick={() => this.props.onClick(FILTERS.SHOW_ALL)}
                active={(this.props.currentFilter === FILTERS.SHOW_ALL)
                } />

            <FilterComponent text="Active"
                onclick={() => this.props.onClick(FILTERS.SHOW_ACTIVE)}
                active={(this.props.currentFilter === FILTERS.SHOW_ACTIVE)
                } />
            <FilterComponent text="Completed"
                onclick={() => this.props.onClick(FILTERS.SHOW_COMPLETED)}
                active={(this.props.currentFilter === FILTERS.SHOW_COMPLETED)
                } />
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentFilter: state.currentFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (filter) => dispatch(changeFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)