import * as React from 'react'
import { Filter } from '../Filter/Filter'
import { updateFiltersAction, UpdateFiltersActionPayload } from '../../redux/store/filters/stops/actions'

import css from './StopsFilters.module.styl'

export interface StopFiltersState {
    allStops: boolean
    stops_0: boolean
    stops_1: boolean
    stops_2: boolean
    stops_3: boolean
}

export type StopFiltersStateKeys = Array<keyof StopFiltersState>

export interface StopFiltersDispatchProps {
    updateFilters: typeof updateFiltersAction
}

export const stopsFilters = (props: StopFiltersDispatchProps) => {
    const initialState: StopFiltersState = {
        allStops: true,
        stops_0: true,
        stops_1: true,
        stops_2: true,
        stops_3: true,
    }

    const [filtersManager, setFiltersState] = React.useState(initialState)

    React.useEffect(() => {
        const updateFiltersPayload: UpdateFiltersActionPayload = {};

        (Object.keys(filtersManager) as StopFiltersStateKeys).forEach((key) => {
            if (filtersManager[key] === false && key !== 'allStops') {
                updateFiltersPayload[Number(key.slice(-1))] = true
            }
        })

        props.updateFilters(updateFiltersPayload)
    }, [filtersManager])

    const changeStopFilterValues = (checkboxId: keyof StopFiltersState) => {
        setFiltersState((prevState) => {
            if (checkboxId === 'allStops') {
                const result: Partial<StopFiltersState> = {};

                (Object.keys(prevState) as StopFiltersStateKeys).forEach((key) => {
                    result[key] = !prevState[checkboxId]
                })

                return { ...prevState, ...result }
            }

            if (!prevState[checkboxId] === false) {
                return {
                    ...prevState,
                    [checkboxId]: !prevState[checkboxId],
                    allStops: false,
                }
            }

            if (!prevState[checkboxId] === true) {
                const prevCheckboxValues = Object.values(prevState).slice(1)
                let unCheckedCounters = 0

                for (let i = 0; i < prevCheckboxValues.length; i++) {
                    if (prevCheckboxValues[i] === false) unCheckedCounters++

                    if (unCheckedCounters > 1) {
                        return {
                            ...prevState,
                            [checkboxId]: !prevState[checkboxId],
                            allStops: false,
                        }
                    }

                    if (i === prevCheckboxValues.length - 1) {
                        return {
                            ...prevState,
                            [checkboxId]: !prevState[checkboxId],
                            allStops: true,
                        }
                    }
                }
            }

            return { ...prevState }
        })
    }

    return (
        <div className={css.StopsFilters}>
            <p className={css.StopsFilters_Title}>Количество пересадок</p>
            <Filter
                text='Все'
                checkboxId='allStops'
                checked={filtersManager.allStops}
                changeHandler={() => changeStopFilterValues('allStops')}
            />
            <Filter
                text='Без пересадок'
                checkboxId='stops_0'
                checked={filtersManager.stops_0}
                changeHandler={() => changeStopFilterValues('stops_0')}
            />
            <Filter
                text='1 пересадка'
                checkboxId='stops_1'
                checked={filtersManager.stops_1}
                changeHandler={() => changeStopFilterValues('stops_1')}
            />
            <Filter
                text='2 пересадки'
                checkboxId='stops_2'
                checked={filtersManager.stops_2}
                changeHandler={() => changeStopFilterValues('stops_2')}
            />
            <Filter
                text='3 пересадки'
                checkboxId='stops_3'
                checked={filtersManager.stops_3}
                changeHandler={() => changeStopFilterValues('stops_3')}
            />
        </div>
    )
}
