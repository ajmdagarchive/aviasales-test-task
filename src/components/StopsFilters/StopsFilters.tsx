import React from 'react'

import css from './StopsFilters.module.styl'

export const StopsFilters = () => {
    return (
        <div className={css.StopsFilters}>
            <div>Количество пересадок</div>
            <div>все</div>
            <div>без</div>
            <input type="checkbox" name="" id="" />
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    )
}
