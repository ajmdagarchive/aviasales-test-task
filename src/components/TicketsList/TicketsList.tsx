import * as React from 'react'
import { Ticket } from '../Ticket/Ticket'
import { Ticket as TicketType } from '../../redux/store/tickets/reducer'

export interface TicketsListMapProps {
    tickets: TicketType[]
    allTickets: TicketType[]
    isTicketsLoaded: boolean
}

export const TicketsList = (props: TicketsListMapProps) => {
    const { isTicketsLoaded, tickets, allTickets } = props

    if (!isTicketsLoaded) return <p>Загрузка...</p>

    return (
        <div>
            {tickets.length
                ? (
                    props.tickets.map((ticket: TicketType) => {
                        return <Ticket
                            key={`${ticket.price}-${ticket.carrier}-${ticket.segments[0].date}-${ticket.segments[1].date}-${ticket.segments[0].destination}-${ticket.segments[1].destination}`}
                            data={ticket}
                        />
                    }))
                : (
                    <p>Мы нашли {allTickets.length} рейсов, но ни один не соответствует заданным фильтрам.</p>
                )}
        </div>
    )
}
