import {
    applyMiddleware,
    createStore,
    DeepPartial,
    Middleware,
    Store,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { runSagas } from './sagas'
import { loadTicketsAction } from './store/tickets/actions'
import { RootStore } from './types'

export const configureStore = (initialData?: DeepPartial<RootStore>) => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares: Middleware[] = [sagaMiddleware]

    const composeEnhancers = composeWithDevTools(
        applyMiddleware(...middlewares),
    )

    const store: Store<RootStore> = createStore(
        rootReducer,
        initialData,
        composeEnhancers,
    )

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./rootReducer', () => {
            return store.replaceReducer(rootReducer)
        })
    }

    runSagas(sagaMiddleware)

    store.dispatch(loadTicketsAction())

    return store
}
