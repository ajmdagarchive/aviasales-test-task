import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Sorting, SortingDispatchProps } from '../../components/Sorting/Sorting'
import { updateSortingAction } from '../../redux/store/sort/actions'

const mapDispatchToProps = (dispatch: Dispatch): SortingDispatchProps =>
    bindActionCreators(
        {
            updateSorting: updateSortingAction,
        },
        dispatch,
    )

export const SortingContainer = connect(
    null,
    mapDispatchToProps,
)(Sorting)
