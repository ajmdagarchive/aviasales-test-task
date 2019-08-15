import { combineReducers } from 'redux'
import { stops } from './stops/reducers'

export const filters = combineReducers({
    stops,
})
