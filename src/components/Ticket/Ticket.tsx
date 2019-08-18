import * as React from 'react'
import { Ticket as TicketType } from '../../redux/store/tickets/reducer'

import css from './Ticket.module.styl'

export interface TicketProps {
    data: TicketType
}

export const Ticket = (props: TicketProps) => {
    const { carrier, price, segments } = props.data

    const formatToHHMM = (date: Date) => date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })

    const addMinutes = (date: Date, diff: number) => {
        return new Date(date.getTime() + diff * 60000)
    }

    const renderStopsQuantity = (stopsLength: number) => {
        switch (true) {
            case stopsLength > 1:
                return `${stopsLength} пересадки`
            case stopsLength === 1:
                return '1 пересадка'
            case stopsLength === 0:
                return 'Прямой'
        }
    }

    return (
        <div className={css.Ticket}>
            <header className={css.Ticket_Header}>
                <p className={css.Ticket_Price}>{`${Number(price).toLocaleString('ru-RU')} Р`}</p>
                <div className={css.Ticket_Carrier}>
                    <img
                        className={css.Ticket_CarrierImage}
                        src={`https://pics.avs.io/99/36/${carrier}.png`}
                        alt='Логотип авиакомпании'
                    />
                </div>
            </header>

            <div className={css.Ticket_Info}>
                <div className={css.Ticket_InfoBlock}>
                    <div className={css.Ticket_InfoTitle}>
                        {`${segments[0].origin} - ${segments[0].destination}`}
                    </div>
                    <div className={css.Ticket_InfoValue}>
                        {`${formatToHHMM(new Date(segments[0].date))} - ${formatToHHMM(addMinutes(new Date(segments[0].date), segments[0].duration))}`}
                    </div>
                </div>
                <div className={css.Ticket_InfoBlock}>
                    <div className={css.Ticket_InfoTitle}>В пути</div>
                    <div className={css.Ticket_InfoValue}>
                        {formatToHHMM(new Date(0, 0, 0, 0, segments[0].duration))}
                    </div>
                </div>
                <div className={`${css.Ticket_Stops} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>
                        {renderStopsQuantity(segments[0].stops.length)}
                    </div>
                    <div className={css.Ticket_InfoValue}>
                        {segments[0].stops.join(', ')}
                    </div>
                </div>
            </div>

            <div className={css.Ticket_Info}>
                <div className={css.Ticket_InfoBlock}>
                    <div
                        className={css.Ticket_InfoTitle}
                    >{`${segments[1].origin} - ${segments[1].destination}`}</div>
                    <div className={css.Ticket_InfoValue}>
                        {`${formatToHHMM(new Date(segments[1].date))} - ${formatToHHMM(addMinutes(new Date(segments[1].date), segments[1].duration))}`}
                    </div>
                </div>
                <div className={css.Ticket_InfoBlock}>
                    <div className={css.Ticket_InfoTitle}>В пути</div>
                    <div className={css.Ticket_InfoValue}>
                        {formatToHHMM(new Date(0, 0, 0, 0, segments[1].duration))}
                    </div>
                </div>
                <div className={`${css.Ticket_Stops} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>
                        {renderStopsQuantity(segments[1].stops.length)}
                    </div>
                    <div className={css.Ticket_InfoValue}>
                        {segments[1].stops.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    )
}
