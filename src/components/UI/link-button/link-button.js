import React from 'react'
import { Link } from 'react-router-dom'

import '../button.scss'

const LinkButton = (props) => (
    <Link to={props.link}>
        <div>
            <button className="button" type={props.type} onClick={props.clicked} {...props}>{props.children}</button>
        </div>
    </Link >
)

export default LinkButton