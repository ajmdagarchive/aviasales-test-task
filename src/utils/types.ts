import { Ticket } from '../redux/store/tickets/reducer'

export interface GetTicketsResponse {
    tickets: Ticket[]
    stop: boolean
}
