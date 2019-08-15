import { actionCreatorFactory } from 'typescript-fsa'

export interface UpdateFiltersPayload {
    [key: number]: true
}

const ACF = actionCreatorFactory()

export const updateFilters = ACF<UpdateFiltersPayload>('UPDATE_FILTERS')
