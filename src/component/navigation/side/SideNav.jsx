import React from 'react'
import Links from '../../links/Links'
import { AiFillSetting, AiFillHome, AiOutlineUserAdd } from "react-icons/ai"
import "./sidenav.css"

const SideNav = () => {
    const paths = [
        { to: "/settings", label: "Settings", icons: <AiFillSetting /> },
        { to: "/home", label: "Home", icons: <AiFillHome /> },
        { to: "/users", label: "Users", icons: <AiOutlineUserAdd /> },
        { to: "/admin", label: "Admin", icons: <AiFillSetting /> }
    ]
    return (
        <div id='links'>
            {
                paths.map(({to, icons, label}) => {
                    return <Links key={label} to={to} label={label} icons={icons} />
                })
            }
        </div>
    )
}

export default SideNav
