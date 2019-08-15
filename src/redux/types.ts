import { StopsFilterStore } from './store/filters/stops/reducer'
import { Ticket } from './store/tickets/reducer'
import { SortingStore } from './store/sort/reducer'

export interface RootStore {
    filters: {
        stops: StopsFilterStore,
    }
    sort: SortingStore
    tickets: Ticket[]
}
