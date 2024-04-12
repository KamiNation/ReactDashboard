import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './component/layout/MainLayout'
import Home from './component/pages/Home'
import Settings from './component/pages/Settings'
import Login from './component/pages/Login'
import Users from './component/pages/Users'
import Admin from './component/pages/Admin'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "*",
                element: "Page not found"
            },
            {
                path: "/users",
                element: <Users/>
            },
            {
                path: "/admin",
                element: <Admin/>
            }
        ]
    }
])

export default router


