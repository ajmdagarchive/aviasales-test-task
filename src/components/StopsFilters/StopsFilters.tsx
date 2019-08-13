import React from 'react'
import { Filter } from '../Filter/Filter'

import css from './StopsFilters.module.styl'

export const StopsFilters = () => {
    return (
        <>
            <p className={css.StopsFilters_Title}>Количество пересадок</p>
            <Filter label="Все" checkboxId="allStops" checked={true} />
            <Filter label="Без пересадок" checkboxId="withoutStops" />
            <Filter label="1 пересадка" checkboxId="oneStop" />
            <Filter label="2 пересадки" checkboxId="twoStops" />
            <Filter label="3 пересадки" checkboxId="threeStops" />
        </>
    )
}
