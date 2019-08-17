import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Logo } from './components/Logo/Logo'
import { FiltersContainer } from './components/layout/FiltersContainer/FiltersContainer'
import { Content } from './components/layout/Content/Content'
import { Page } from './components/layout/Page/Page'
import { SortingContainer } from './containers/SortingContainer/SortingContainer'
import { TicketsListContainer } from './containers/TicketsListContainer/TicketsListContainer'
import { MainContent } from './components/layout/MainContent/MainContent'
import { StopsFiltersContainer } from './containers/StopsFiltersContainer/StopsFiltersContainer'
import { configureStore } from './redux/configureStore'
import { Provider } from 'react-redux'

import './app.styl'

const store = configureStore()

const App = () => (
    <Provider store={store}>
        <Page>
            <Logo />
            <MainContent>
                <FiltersContainer>
                    <StopsFiltersContainer />
                </FiltersContainer>
                <Content>
                    <SortingContainer />
                    <TicketsListContainer />
                </Content>
            </MainContent>
        </Page>
    </Provider>
)

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)
