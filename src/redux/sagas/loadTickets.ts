import { takeLatest, put } from 'redux-saga/effects'
import { loadTicketsAction, loadTicketsAsync } from '../store/tickets/actions'
import { apiClient } from '../../utils/httpClient'

function* loadTicketsSaga() {
    yield put(loadTicketsAsync.started())
    const { searchId } = yield apiClient.getSearchId()

    let data
    data = yield apiClient.getTickets(searchId)
    yield put(
        loadTicketsAsync.done({ params: undefined, result: data.tickets }),
    )

    while (!data.stop) {
        data = yield apiClient.getTickets(searchId)
        yield put(
            loadTicketsAsync.done({ params: undefined, result: data.tickets }),
        )
    }
}

export function* watchLoadTickets() {
    yield takeLatest(loadTicketsAction, loadTicketsSaga)
}
