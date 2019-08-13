import React from 'react'

import css from './Ticket.module.styl'

export const Ticket = () => {
    return (
        <div className={css.Ticket}>
            <header className={css.Ticket_Header}>
                <p className={css.Ticket_Price}>10 000 Р</p>
                <img
                    className={css.Ticket_Carrier}
                    alt="Логотип авиакомпании"
                />
            </header>

            <div className={css.Ticket_Info}>
                <div className={`${css.Ticket_Way} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>MOW - HKT</div>
                    <div className={css.Ticket_InfoValue}>10:45 - 08:30</div>
                </div>
                <div className={`${css.Ticket_Time} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>В пути</div>
                    <div className={css.Ticket_InfoValue}>21ч 15м</div>
                </div>
                <div className={`${css.Ticket_Stops} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>2 пересадки</div>
                    <div className={css.Ticket_InfoValue}>HKG, JNB</div>
                </div>
            </div>

            <div className={css.Ticket_Info}>
                <div className={`${css.Ticket_Way} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>MOW - HKT</div>
                    <div className={css.Ticket_InfoValue}>10:45 - 08:30</div>
                </div>
                <div className={`${css.Ticket_Time} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>В пути</div>
                    <div className={css.Ticket_InfoValue}>21ч 15м</div>
                </div>
                <div className={`${css.Ticket_Stops} ${css.Ticket_InfoBlock}`}>
                    <div className={css.Ticket_InfoTitle}>2 пересадки</div>
                    <div className={css.Ticket_InfoValue}>HKG, JNB</div>
                </div>
            </div>
        </div>
    )
}
