import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../navigation/side/SideNav'
import "./mainlayout.css"

const MainLayout = () => {
    return (
        <div id='layout'>
            <div id='side-nav'>
                <SideNav />
            </div>
            <div id='display'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
