import React from 'react'

const imageSrc = require('./i/Logo.svg')
import css from './Logo.module.styl'

export const Logo = () => {
    return (
        <div className={css.Logo}>
            <img src={imageSrc} alt="Aviasales Logo" />
        </div>
    )
}
