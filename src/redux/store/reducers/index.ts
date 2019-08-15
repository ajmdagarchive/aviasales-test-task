import { combineReducers } from 'redux'
import { filters } from '../filters'
import { tickets } from '../tickets/reducer'
import { sort } from '../sort/reducer'

export const rootReducer = combineReducers({
    filters,
    sort,
    tickets,
})
