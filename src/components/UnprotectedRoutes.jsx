import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'
import { jwtDecode } from 'jwt-decode'

function UnprotectedRoutes() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    // const user = useSelector((state) => state.auth.user)
    
    // if (isAuthenticated && user?.access) {
    //     try {
    //         const decodedToken = jwtDecode(user.access)
    //         const currentTime = Date.now() / 1000
            
    //         if (decodedToken.exp >= currentTime) {
    //             return <Navigate to="/" replace />
    //         }
    //     } catch (error) {
    //         console.error('Invalid token in UnprotectedRoutes')
    //     }
    // }

    if (isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default UnprotectedRoutes