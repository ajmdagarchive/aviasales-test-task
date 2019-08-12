import React from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/Logo/Logo'
import { FiltersContainer } from './components/layout/FiltersContainer/FiltersContainer'
import { Content } from './components/layout/Content/Content'
import { Page } from './components/layout/Page/Page'
import { Sorting } from './components/Sorting/Sorting'
import { TicketsContainer } from './components/TicketsContainer/TicketsContainer'
import { MainContent } from './components/layout/MainContent/MainContent'
import { StopsFilters } from './components/StopsFilters/StopsFilters'

import './app.styl'

const App = () => (
    <Page>
        <Logo />
        <MainContent>
            <FiltersContainer>
                <StopsFilters />
            </FiltersContainer>
            <Content>
                <Sorting />
                <TicketsContainer />
            </Content>
        </MainContent>
    </Page>
)

ReactDOM.render(<App />, document.getElementById('root'))
