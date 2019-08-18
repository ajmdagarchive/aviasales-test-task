import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { updateSortingAction, UpdateSortingActionPayload } from './actions'

const initialState = 'price'

export type SortingStore = UpdateSortingActionPayload

export const sort = reducerWithInitialState<SortingStore>(initialState)
    .case(updateSortingAction, (_state, data) => {
        return data
    })
