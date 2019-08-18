import { combineReducers } from 'redux'
import { stops } from './stops/reducer'

export const filters = combineReducers({
    stops,
})
