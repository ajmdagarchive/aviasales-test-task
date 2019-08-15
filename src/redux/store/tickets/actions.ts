import { actionCreatorFactory } from 'typescript-fsa'
import { Ticket } from './reducer'

const ACF = actionCreatorFactory('tickets')

export const loadTicketsAction = ACF('LOAD_TICKETS')
export const loadTicketsAsync = ACF.async<undefined, Ticket[]>('LOAD_TICKETS')
