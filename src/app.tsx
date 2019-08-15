import React from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/Logo/Logo'
import { FiltersContainer } from './components/layout/FiltersContainer/FiltersContainer'
import { Content } from './components/layout/Content/Content'
import { Page } from './components/layout/Page/Page'
import { Sorting } from './components/Sorting/Sorting'
import { TicketsContainer } from './components/TicketsContainer/TicketsContainer'
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
                    <Sorting />
                    <TicketsContainer />
                </Content>
            </MainContent>
        </Page>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
