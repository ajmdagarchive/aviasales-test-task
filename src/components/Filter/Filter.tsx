import * as React from 'react'
import { StopFiltersState } from '../StopsFilters/StopsFilters'

import css from './Filter.module.styl'

interface FilterProps {
    text: string
    checkboxId: StopFiltersIds
    checked: boolean
    setFiltersState: React.Dispatch<React.SetStateAction<StopFiltersState>>
}

export type StopFiltersIds =
    | 'allStops'
    | 'stops_0'
    | 'stops_1'
    | 'stops_2'
    | 'stops_3'

export type StopFiltersKeys = StopFiltersIds[]

export const Filter = (props: FilterProps) => {
    const { checked, text, checkboxId } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()

        props.setFiltersState((prevState) => {
            if (event.target.id === 'allStops') {
                const result = {} as StopFiltersState
                const stopFilterStateKeys = Object.keys(
                    prevState,
                ) as StopFiltersKeys

                stopFilterStateKeys.forEach((key: keyof StopFiltersState) => {
                    result[key] = event.target.checked
                })

                return { ...result }
            }

            if (event.target.checked === false) {
                return {
                    ...prevState,
                    [event.target.id]: event.target.checked,
                    allStops: false,
                }
            }

            if (event.target.checked === true) {
                const prevCheckboxValues = Object.values(prevState).slice(1)
                let unCheckedCounters = 0

                for (let i = 0; i < prevCheckboxValues.length; i++) {
                    if (prevCheckboxValues[i] === false) unCheckedCounters++

                    if (unCheckedCounters > 1) {
                        return {
                            ...prevState,
                            [event.target.id]: event.target.checked,
                            allStops: false,
                        }
                    }

                    if (i === prevCheckboxValues.length - 1) {
                        return {
                            ...prevState,
                            [event.target.id]: event.target.checked,
                            allStops: true,
                        }
                    }
                }
            }

            return { ...prevState }
        })
    }

    return (
        <div className={css.Filter}>
            <label htmlFor={checkboxId} className={css.Filter_Label}>
                <span>
                    <input
                        checked={checked}
                        className={css.Filter_Input}
                        type='checkbox'
                        id={checkboxId}
                        onChange={handleChange}
                    />
                    <span className={css.Filter_CustomCheckBox}></span>
                </span>
                {text}
            </label>
        </div>
    )
}
