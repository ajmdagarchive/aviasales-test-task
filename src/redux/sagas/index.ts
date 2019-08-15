import { SagaMiddleware } from 'redux-saga'
import { watchLoadTickets } from './loadTickets'

export const runSagas = (middleWare: SagaMiddleware<{}>) => {
    middleWare.run(watchLoadTickets)
}
