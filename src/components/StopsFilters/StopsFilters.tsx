import React, { useState } from 'react'
import { Filter, StopFiltersIds } from '../Filter/Filter'
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

export const StopsFilters = (props: StopFiltersDispatchProps) => {
    const [stopFilters, setStopFilter] = useState({
        allStops: true,
        stops_0: true,
        stops_1: true,
        stops_2: true,
        stops_3: true,
    })

    const changeStopFilterValue = (key: StopFiltersIds) => {
        setStopFilter((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }))
    }

    return (
        <>
            <p className={css.StopsFilters_Title}>Количество пересадок</p>
            <Filter
                text="Все"
                checkboxId="allStops"
                checked={stopFilters.allStops}
                setFiltersState={() => changeStopFilterValue('allStops')}
            />
            <Filter
                text="Без пересадок"
                checkboxId="stops_0"
                checked={stopFilters.stops_0}
                setFiltersState={() => changeStopFilterValue('stops_0')}
            />
            <Filter
                text="1 пересадка"
                checkboxId="stops_1"
                checked={stopFilters.stops_1}
                setFiltersState={() => changeStopFilterValue('stops_1')}
            />
            <Filter
                text="2 пересадки"
                checkboxId="stops_2"
                checked={stopFilters.stops_2}
                setFiltersState={() => changeStopFilterValue('stops_2')}
            />
            <Filter
                text="3 пересадки"
                checkboxId="stops_3"
                checked={stopFilters.stops_3}
                setFiltersState={() => changeStopFilterValue('stops_3')}
            />
        </>
    )
}
