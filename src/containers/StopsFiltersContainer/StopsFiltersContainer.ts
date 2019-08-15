import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { StopsFilters } from '../../components/StopsFilters/StopsFilters'
import { updateFilters } from '../../redux/store/filters/stops/actions/updateFilters'

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            updateFilters,
        },
        dispatch,
    )

export const StopsFiltersContainer = connect(
    null,
    mapDispatchToProps,
)(StopsFilters)
