// src/components/IconComponent
import React from 'react'

function IconComponent({ icon, className, ...other }) {
    return (
        <svg className={`icon ${className}`} { ...other } aria-hidden="true">
            <use xlinkHref={icon}></use>
        </svg>
    )
}

export default IconComponent
