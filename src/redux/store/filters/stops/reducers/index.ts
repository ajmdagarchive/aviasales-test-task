import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { updateFilters } from '../actions/updateFilters'

const initialState = {}

export const stops = reducerWithInitialState(initialState).case(
    updateFilters,
    (state, data) => {
        return data
    },
)
