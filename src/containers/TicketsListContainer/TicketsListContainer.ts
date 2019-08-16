import { connect } from 'react-redux'
import {
    TicketsList,
    TicketsListMapProps,
} from '../../components/TicketsList/TicketsList'
import { RootStore } from '../../redux/types'
import { createSelector } from 'reselect'
import { compare } from '../../utils/compare'
import { Ticket } from '../../redux/store/tickets/reducer'
import { SortingStore } from '../../redux/store/sort/reducer'

const compareTicketsByPrice = () => (a: Ticket, b: Ticket) => {
    return compare({ a: a.price, b: b.price })
}

const compareTicketsByDuration = () => (a: Ticket, b: Ticket) => {
    // const aDuration = a.segments[0].duration + a.segments[1].duration
    const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
    const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0)

    return compare({ a: aDuration, b: bDuration })
}

const ticketSelector = (state: RootStore) => state.tickets
const sortSelector = (state: RootStore) => state.sort
const stopFiltersSelector = (state: RootStore) => state.filters.stops

const sortingSelector = createSelector(
    ticketSelector, sortSelector, stopFiltersSelector, (tickets: Ticket[], sort: SortingStore, stopFilters) => {
        // filter
        const filteredTickets = [...tickets]

        if (Object.entries(stopFilters).length !== 0) {
            filteredTickets.filter((ticket) => {
                for (const segment of ticket.segments) {
                    for (const stopFilter of Object.keys(stopFilters)) {
                        if (Number(stopFilter) === segment.stops.length) return true
                    }
                }
            })
        }

        // sort
        if (sort === 'price') filteredTickets.sort(compareTicketsByPrice())
        if (sort === 'duration') filteredTickets.sort(compareTicketsByDuration())

        return filteredTickets.slice(0, 5)
    },
)

const mapStateToProps = (state: RootStore): TicketsListMapProps => {
    return {
        tickets: state.tickets,
        ticketsAll: sortingSelector(state),
    }
}

export const TicketsListContainer = connect(
    mapStateToProps,
)(TicketsList)
