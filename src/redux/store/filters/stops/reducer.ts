import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { updateFiltersAction } from './actions'

const initialState: StopsFilterStore = {}

export interface StopsFilterStore {
    [key: number]: true
}

export const stops = reducerWithInitialState(initialState).case(
    updateFiltersAction,
    (state, data) => {
        return data
    },
)
