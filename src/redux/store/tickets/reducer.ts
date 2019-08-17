import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { loadTicketsAsync } from './actions'

const initialState: Ticket[] = []

export interface Ticket {
    price: number
    carrier: string
    segments: [
        {
            origin: string
            destination: string
            date: string
            stops: string[]
            duration: number,
        },
        {
            origin: string
            destination: string
            date: string
            stops: string[]
            duration: number,
        },
    ]
}

export const tickets = reducerWithInitialState(initialState)
    .case(loadTicketsAsync.done, (state, data) => {
        return [...state, ...data.result]
    })
