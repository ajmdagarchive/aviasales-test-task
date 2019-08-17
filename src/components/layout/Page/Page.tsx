import * as React from 'react'

import css from './Page.module.styl'

interface PageProps {
    children: React.ReactNode
}

export const Page = (props: PageProps) => {
    return <div className={css.Page}>{props.children}</div>
}
