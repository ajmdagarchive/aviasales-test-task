import * as React from 'react'
import { updateSortingAction } from '../../redux/store/sort/actions'

import css from './Sorting.module.styl'

export interface SortingDispatchProps {
    updateSorting: typeof updateSortingAction
}

export interface SortingState {
    price: boolean
    duration: boolean
}

export const Sorting = (props: SortingDispatchProps) => {
    const initialState: SortingState = {
        price: true,
        duration: false,
    }

    const [sortingManager, setSortingState] = React.useState(initialState)

    const handleSortingClick = (sortingType: keyof SortingState) => {

        setSortingState((prevState) => {
            if (!sortingManager[sortingType]) {
                props.updateSorting(sortingType)

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
                className={`${css.Sorting_Tab} ${sortingManager.price ? css.Sorting_Tab__active : ''}`}
                onClick={() => handleSortingClick('price')}
            >
                Самый дешевый
            </li>
            <li
                className={`${css.Sorting_Tab} ${sortingManager.duration ? css.Sorting_Tab__active : ''}`}
                onClick={() => handleSortingClick('duration')}
            >
                Самый быстрый
            </li>
        </ul>
    )
}
