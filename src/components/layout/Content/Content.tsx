import React from 'react'

import css from './Content.module.styl'

interface ContentProps {
    children: React.ReactNode
}

export const Content = (props: ContentProps) => {
    return <div className={css.Content}>{props.children}</div>
}
