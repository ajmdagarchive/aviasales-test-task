import { actionCreatorFactory } from 'typescript-fsa'
import { SortingState } from '../../../components/Sorting/Sorting'

export type UpdateSortingActionPayload = keyof SortingState

const ACF = actionCreatorFactory('sort')

export const updateSortingAction = ACF<UpdateSortingActionPayload>('UPDATE_SORTING')
