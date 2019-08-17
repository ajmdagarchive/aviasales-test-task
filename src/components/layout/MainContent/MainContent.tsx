import * as React from 'react'

import css from './MainContent.module.styl'

interface MainContentProps {
    children: React.ReactNode
}

export const MainContent = (props: MainContentProps) => {
    return <div className={css.MainContent}>{props.children}</div>
}
