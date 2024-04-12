import React from 'react'
import { NavLink } from 'react-router-dom'
import "./links.css"



const Links = ({label, to, icons}) => {
    return (
        <div>
            <NavLink to={to}  >
                <span>{icons}</span>
                <span>{label}</span>
            </NavLink>
        </div>
    )
}

export default Links
