import { takeLatest, put } from 'redux-saga/effects'
import { loadTicketsAction, loadTicketsAsync } from '../store/tickets/actions'
import { isTicketsLoadedAction } from '../store/isTicketsLoaded/actions'
import { apiClient } from '../../utils/httpClient'
import { GetTicketsResponse } from '../../utils/types'

function* loadTicketsSaga() {
    yield put(loadTicketsAsync.started())
    const { searchId } = yield apiClient.getSearchId()

    let ticketsResponse: GetTicketsResponse
    ticketsResponse = yield apiClient.getTickets(searchId)

    while (!ticketsResponse.stop) {
        const dataChunk = yield apiClient.getTickets(searchId)
        ticketsResponse = {
            tickets: [...ticketsResponse.tickets, ...dataChunk.tickets],
            stop: dataChunk.stop,
        }
    }

    yield put(
        loadTicketsAsync.done({
            params: undefined,
            result: ticketsResponse.tickets,
        }),
    )

    yield put(isTicketsLoadedAction(true))
}

export function* watchLoadTickets() {
    yield takeLatest(loadTicketsAction, loadTicketsSaga)
}
