import * as React from 'react'

const imageSrc = require('./assets/Logo.svg')
import css from './Logo.module.styl'

export const Logo = () => {
    return (
        <div className={css.Logo}>
            <img src={imageSrc} alt='Логотип Aviasales' />
        </div>
    )
}
