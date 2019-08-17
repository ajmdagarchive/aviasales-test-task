import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import {
    stopsFilters,
    StopFiltersDispatchProps,
} from '../../components/StopsFilters/StopsFilters'
import { updateFiltersAction } from '../../redux/store/filters/stops/actions'

const mapDispatchToProps = (dispatch: Dispatch): StopFiltersDispatchProps => bindActionCreators({
    updateFilters: updateFiltersAction,
}, dispatch)

export const StopsFiltersContainer = connect(
    null,
    mapDispatchToProps,
)(stopsFilters)
