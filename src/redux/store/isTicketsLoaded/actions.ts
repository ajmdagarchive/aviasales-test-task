import { actionCreatorFactory } from 'typescript-fsa'

const ACF = actionCreatorFactory()

export const isTicketsLoadedAction = ACF<boolean>('IS_TICKETS_LOADED')
