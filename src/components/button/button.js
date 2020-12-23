import React from 'react'
import { Link } from 'gatsby'

import buttonStyles from './button.module.scss'

const Button = (props) => {
const link = props.link;
const content = props.content

    return (
        <div>
            <Link className={buttonStyles.button} to={link}>{content}</Link>
        </div>
    )
}

export default Button
