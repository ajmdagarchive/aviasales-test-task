import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { isTicketsLoadedAction } from './actions'

const initialState = false

export const isTicketsLoaded = reducerWithInitialState(initialState)
    .case(isTicketsLoadedAction, (_state, data) => {
        return data
    })
