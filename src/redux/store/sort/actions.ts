import { actionCreatorFactory } from 'typescript-fsa'

export type UpdateSortingActionPayload = 'price' | 'duration'

const ACF = actionCreatorFactory('sort')

export const updateSortingAction = ACF<UpdateSortingActionPayload>(
    'UPDATE_SORTING',
)
