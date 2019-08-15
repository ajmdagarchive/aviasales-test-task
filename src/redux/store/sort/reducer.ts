import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { updateSortingAction } from './actions'
import { UpdateSortingActionPayload } from './actions'

const initialState = 'price'

export type SortingStore = 'price' | 'duration'

export const sort = reducerWithInitialState<SortingStore>(initialState).case(
    updateSortingAction,
    (state, data) => {
        return data
    },
)
