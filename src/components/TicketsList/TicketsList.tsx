import React from 'react'
import { Ticket } from '../Ticket/Ticket'
import { Ticket as TicketType } from '../../redux/store/tickets/reducer'
import uuidv4 from 'uuid/v4'

export interface TicketsListMapProps {
    tickets: TicketType[]
}

export const TicketsList = (props: TicketsListMapProps) => {
    return (
        <div>
            {props.tickets.length
                ? (
                    props.tickets.map((item: any) => {
                        return <Ticket key={uuidv4()} data={item} />
                    }))
                : (
                    <p>Загрузка...</p>
                )}
        </div>
    )
}
