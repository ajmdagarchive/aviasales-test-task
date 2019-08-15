import React, { useState, MouseEvent } from 'react'
import {
    updateSortingAction,
    UpdateSortingActionPayload,
} from '../../redux/store/sort/actions'

import css from './Sorting.module.styl'

export interface SortingDispatchProps {
    updateSorting: typeof updateSortingAction
}

export const Sorting = (props: SortingDispatchProps) => {
    const initialState = {
        price: true,
        duration: false,
    }

    const [sortingManager, setSortingState] = useState(initialState)

    const handleSortingClick = (event: MouseEvent<HTMLLIElement>) => {
        const target = event.target as HTMLLIElement
        const targetSortingType = target.getAttribute(
            'data-sorting',
        ) as UpdateSortingActionPayload

        setSortingState((prevState) => {
            if (!sortingManager[targetSortingType]) {
                props.updateSorting(targetSortingType)

                return {
                    ...prevState,
                    price: !prevState.price,
                    duration: !prevState.duration,
                }
            }

            return { ...prevState }
        })
    }

    return (
        <ul className={css.Sorting}>
            <li
                className={`${css.Sorting_Tab} ${
                    sortingManager.price ? css.Sorting_Tab__active : ''
                }`}
                onClick={handleSortingClick}
                data-sorting='price'
            >
                Самый дешевый
            </li>
            <li
                className={`${css.Sorting_Tab} ${
                    sortingManager.duration ? css.Sorting_Tab__active : ''
                }`}
                onClick={handleSortingClick}
                data-sorting='duration'
            >
                Самый быстрый
            </li>
        </ul>
    )
}
