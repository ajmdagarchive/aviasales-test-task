import React, { useState } from 'react'
import { Filter } from '../Filter/Filter'

import css from './StopsFilters.module.styl'

export interface StopFiltersState {
    allStops: boolean
    noStops: boolean
    oneStop: boolean
    twoStops: boolean
    threeStops: boolean
}

export const StopsFilters = () => {
    const initialState = {
        allStops: true,
        noStops: true,
        oneStop: true,
        twoStops: true,
        threeStops: true,
    }

    const [filtersManager, setFiltersState] = useState(initialState)

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
                checkboxId='noStops'
                checked={filtersManager.noStops}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='1 пересадка'
                checkboxId='oneStop'
                checked={filtersManager.oneStop}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='2 пересадки'
                checkboxId='twoStops'
                checked={filtersManager.twoStops}
                setFiltersState={setFiltersState}
            />
            <Filter
                text='3 пересадки'
                checkboxId='threeStops'
                checked={filtersManager.threeStops}
                setFiltersState={setFiltersState}
            />
        </>
    )
}
