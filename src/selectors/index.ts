import { RootStore } from '../redux/types'

export const ticketSelector = (state: RootStore) => state.tickets
export const sortSelector = (state: RootStore) => state.sort
export const stopFiltersSelector = (state: RootStore) => state.filters.stops
