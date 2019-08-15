import { actionCreatorFactory } from 'typescript-fsa'

const ACF = actionCreatorFactory('filters')

export interface UpdateFiltersActionPayload {
    [key: number]: true
}

export const updateFiltersAction = ACF<UpdateFiltersActionPayload>(
    'UPDATE_FILTERS',
)
