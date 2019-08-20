import * as React from 'react'
import { StopFilter } from '../StopFilter/StopFilter'
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

    const [stopFiltersState, setFiltersState] = React.useState(initialState)

    React.useEffect(() => {
        const updateFiltersPayload: UpdateFiltersActionPayload = {};

        (Object.keys(stopFiltersState) as StopFiltersStateKeys).forEach((key) => {
            if (stopFiltersState[key] === false && key !== 'allStops') {
                updateFiltersPayload[Number(key.slice(-1))] = true
            }
        })

        props.updateFilters(updateFiltersPayload)
    }, [stopFiltersState])

    const changeStopFilterValues = (checkboxId: keyof StopFiltersState) => {
        setFiltersState((prevState) => {
            if (checkboxId === 'allStops') {
                const isChecked = !prevState[checkboxId]

                return {
                    allStops: isChecked,
                    stops_0: isChecked,
                    stops_1: isChecked,
                    stops_2: isChecked,
                    stops_3: isChecked,
                }
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
            <StopFilter
                text='Все'
                checkboxId='allStops'
                checked={stopFiltersState.allStops}
                changeHandler={() => changeStopFilterValues('allStops')}
            />
            <StopFilter
                text='Без пересадок'
                checkboxId='stops_0'
                checked={stopFiltersState.stops_0}
                changeHandler={() => changeStopFilterValues('stops_0')}
            />
            <StopFilter
                text='1 пересадка'
                checkboxId='stops_1'
                checked={stopFiltersState.stops_1}
                changeHandler={() => changeStopFilterValues('stops_1')}
            />
            <StopFilter
                text='2 пересадки'
                checkboxId='stops_2'
                checked={stopFiltersState.stops_2}
                changeHandler={() => changeStopFilterValues('stops_2')}
            />
            <StopFilter
                text='3 пересадки'
                checkboxId='stops_3'
                checked={stopFiltersState.stops_3}
                changeHandler={() => changeStopFilterValues('stops_3')}
            />
        </div>
    )
}
