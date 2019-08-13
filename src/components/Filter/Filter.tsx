import React from 'react'

import css from './Filter.module.styl'

interface FilterProps {
    label: string
    checkboxId: string
    checked?: boolean
}

export const Filter = (props: FilterProps) => {
    const { checked, label, checkboxId } = props

    return (
        <div className={css.Filter}>
            <label htmlFor={checkboxId} className={css.Filter_Label}>
                <span>
                    <input
                        defaultChecked={checked}
                        className={css.Filter_Input}
                        type="checkbox"
                        id={checkboxId}
                    />
                    <span className={css.Filter_CustomCheckBox}></span>
                </span>
                {label}
            </label>
        </div>
    )
}
