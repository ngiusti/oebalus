import React from 'react'

import '../button.scss'

const CustomButton = (props) => (
    <div>
        <button className="button" type={props.type} onClick={props.clicked} {...props}>{props.children}</button>
    </div>
)

export default CustomButton