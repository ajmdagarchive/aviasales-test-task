import * as React from 'react'
import { Ticket } from '../Ticket/Ticket'
import { Ticket as TicketType } from '../../redux/store/tickets/reducer'
import * as uuidv4 from 'uuid/v4'

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
                    props.tickets.map((item: TicketType) => {
                        return <Ticket key={uuidv4()} data={item} />
                    }))
                : (
                    <p>Мы нашли {allTickets.length} рейсов, но ни один не соответствует заданным фильтрам.</p>
                )}
        </div>
    )
}
