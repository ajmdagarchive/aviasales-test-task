import * as React from 'react'

import css from './FiltersContainer.module.styl'

interface FiltersContainerProps {
    children: React.ReactNode
}

export const FiltersContainer = (props: FiltersContainerProps) => {
    return <div className={css.FiltersContainer}>{props.children}</div>
}
