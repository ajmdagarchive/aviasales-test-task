import * as React from 'react'
import { StopFiltersState } from '../StopsFilters/StopsFilters'

import css from './Filter.module.styl'

interface FilterProps {
    text: string
    checkboxId: keyof StopFiltersState
    checked: boolean
    changeHandler: () => void
}

export const Filter = (props: FilterProps) => {
    const { checked, text, checkboxId, changeHandler } = props

    return (
        <div className={css.Filter}>
            <label htmlFor={checkboxId} className={css.Filter_Label}>
                <span>
                    <input
                        checked={checked}
                        className={css.Filter_Input}
                        type='checkbox'
                        id={checkboxId}
                        onChange={changeHandler}
                    />
                    <span className={css.Filter_CustomCheckBox}></span>
                </span>
                {text}
            </label>
        </div>
    )
}
