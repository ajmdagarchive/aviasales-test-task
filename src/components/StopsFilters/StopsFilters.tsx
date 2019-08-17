import * as React from 'react'
import { Filter, StopFiltersKeys } from '../Filter/Filter'
import { updateFiltersAction } from '../../redux/store/filters/stops/actions'

import css from './StopsFilters.module.styl'

export interface StopFiltersState {
    allStops: boolean
    stops_0: boolean
    stops_1: boolean
    stops_2: boolean
    stops_3: boolean
}

export interface StopFiltersDispatchProps {
    updateFilters: typeof updateFiltersAction
}

export const stopsFilters = (props: StopFiltersDispatchProps) => {
    const initialState = {
        allStops: true,
        stops_0: true,
        stops_1: true,
        stops_2: true,
        stops_3: true,
    }

    const [filtersManager, setFiltersState] = React.useState(initialState)

    React.useEffect(() => {
        const updateFiltersPayload = { ...filtersManager }

        delete updateFiltersPayload.allStops

        const updateFiltersPayloadKeys = Object.keys(
            updateFiltersPayload,
        ) as StopFiltersKeys

        updateFiltersPayloadKeys.forEach((key) => {
            if (updateFiltersPayload[key] === true) {
                delete updateFiltersPayload[key]
            }

            if (updateFiltersPayload[key] === false) {
                updateFiltersPayload[key] = true

                const keyId = key.slice(-1)
                delete Object.assign(updateFiltersPayload, {
                    [keyId]: updateFiltersPayload[key],
                })[key]
            }
        })

        props.updateFilters(updateFiltersPayload)
    }, [filtersManager])

    return (
        <>
            <p className={css.StopsFilters_Title}>Количество пересадок</p>
            <Filter
                text='Все'
                checkboxId='allStops'
                checked={filtersManager.allStops}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='Без пересадок'
                checkboxId='stops_0'
                checked={filtersManager.stops_0}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='1 пересадка'
                checkboxId='stops_1'
                checked={filtersManager.stops_1}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='2 пересадки'
                checkboxId='stops_2'
                checked={filtersManager.stops_2}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='3 пересадки'
                checkboxId='stops_3'
                checked={filtersManager.stops_3}
                setFiltersState={setFiltersState}
            />
        </>
    )
}
