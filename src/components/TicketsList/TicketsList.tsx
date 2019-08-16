import React from 'react'
import { Ticket } from '../Ticket/Ticket'
import { Ticket as TicketType } from '../../redux/store/tickets/reducer'
import uuidv4 from 'uuid/v4'

export interface TicketsListMapProps {
    tickets: TicketType[]
    ticketsAll: any
}

export const TicketsList = (props: TicketsListMapProps) => {
    console.log(props.ticketsAll)
    return (
        <div>
            {props.ticketsAll && props.ticketsAll.length
                ? props.ticketsAll.map((item: any) => {
                    return <Ticket key={uuidv4() /* or price */} data={item} />
                })
                : <p>Загрузка...</p>
            }
        </div>
    )
}
