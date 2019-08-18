import { combineReducers } from 'redux'
import { filters } from './store/filters/reducer'
import { tickets } from './store/tickets/reducer'
import { sort } from './store/sort/reducer'
import { isTicketsLoaded } from './store/isTicketsLoaded/reducers'

export const rootReducer = combineReducers({
    filters,
    sort,
    tickets,
    isTicketsLoaded,
})
