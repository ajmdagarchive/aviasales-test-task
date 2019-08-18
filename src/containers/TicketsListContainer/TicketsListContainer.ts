import { connect } from 'react-redux'
import {
    TicketsList,
    TicketsListMapProps,
} from '../../components/TicketsList/TicketsList'
import { RootStore } from '../../redux/types'
import { createSelector } from 'reselect'
import { compare } from '../../utils/compare'
import { Ticket } from '../../redux/store/tickets/reducer'

const compareTicketsByPrice = () => (a: Ticket, b: Ticket) => {
    return compare({ a: a.price, b: b.price })
}

const compareTicketsByDuration = () => (a: Ticket, b: Ticket) => {
    const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
    const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0)

    return compare({ a: aDuration, b: bDuration })
}

const ticketSelector = (state: RootStore) => state.tickets
const sortSelector = (state: RootStore) => state.sort
const stopFiltersSelector = (state: RootStore) => state.filters.stops

const sortingSelector = createSelector(
    ticketSelector, sortSelector, stopFiltersSelector, (tickets, sort, stopFilters) => {
        let preparedTickets = [...tickets]

        if (Object.entries(stopFilters).length !== 0 && stopFilters.constructor === Object) {
            preparedTickets = preparedTickets.filter((ticket) => {
                for (const [j, segment] of ticket.segments.entries()) {
                    const stopFiltersKeys = Object.keys(stopFilters)
                    const stopsQuantity = segment.stops.length

                    for (const [i, stopFilter] of stopFiltersKeys.entries()) {
                        const isLastSegment = j === ticket.segments.length - 1
                        const isLastFilter = i === stopFiltersKeys.length - 1

                        if (Number(stopFilter) !== stopsQuantity && isLastSegment) return false
                        if (Number(stopFilter) === stopsQuantity && isLastSegment && isLastFilter) return true

                        if (Number(stopFilter) !== stopsQuantity && isLastFilter) return true
                        if (Number(stopFilter) !== stopsQuantity) continue
                        if (Number(stopFilter) === stopsQuantity) break
                    }
                }
            })
        }

        if (sort === 'price') preparedTickets.sort(compareTicketsByPrice())
        if (sort === 'duration') preparedTickets.sort(compareTicketsByDuration())

        return preparedTickets.slice(0, 5)
    },
)

const mapStateToProps = (state: RootStore): TicketsListMapProps => {
    return {
        tickets: sortingSelector(state),
        allTickets: state.tickets,
        isTicketsLoaded: state.isTicketsLoaded,
    }
}

export const TicketsListContainer = connect(
    mapStateToProps,
)(TicketsList)
