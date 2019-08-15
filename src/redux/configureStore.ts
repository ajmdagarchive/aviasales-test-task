import {
    applyMiddleware,
    createStore,
    DeepPartial,
    Middleware,
    Store as ReduxStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './store/reducers'
import { rootSaga } from './sagas'

import { RootStore } from './types'

export const configureStore = (initialData?: DeepPartial<RootStore>) => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares: Middleware[] = [sagaMiddleware]

    const composeEnhancers = composeWithDevTools(
        applyMiddleware(...middlewares),
    )

    const store = createStore(rootReducer, initialData, composeEnhancers)

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./store/reducers', () => {
            return store.replaceReducer(rootReducer)
        })
    }

    sagaMiddleware.run(rootSaga)

    return store
}
