import * as React from 'react'
import { StopFiltersState } from '../StopsFilters/StopsFilters'

import css from './StopFilter.module.styl'

interface StopFilterProps {
    text: string
    checkboxId: keyof StopFiltersState
    checked: boolean
    changeHandler: () => void
}

export const StopFilter = (props: StopFilterProps) => {
    const { checked, text, checkboxId, changeHandler } = props

    return (
        <div className={css.StopFilter}>
            <label htmlFor={checkboxId} className={css.StopFilter_Label}>
                <span>
                    <input
                        checked={checked}
                        className={css.StopFilter_Input}
                        type='checkbox'
                        id={checkboxId}
                        onChange={changeHandler}
                    />
                    <span className={css.StopFilter_CustomCheckBox}></span>
                </span>
                {text}
            </label>
        </div>
    )
}
