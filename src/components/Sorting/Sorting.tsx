import React from 'react'

import css from './Sorting.module.styl'

export const Sorting = () => {
    return (
        <ul className={css.Sorting}>
            <li className={`${css.Sorting_Tab} ${css.Sorting_Tab__active}`}>
                Самый дешевый
            </li>
            <li className={css.Sorting_Tab}>Самый быстрый</li>
        </ul>
    )
}
