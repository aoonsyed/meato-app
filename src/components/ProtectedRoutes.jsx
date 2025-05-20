import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate, Navigate } from 'react-router'
import { jwtDecode } from 'jwt-decode'
import { logout } from '../store/authSlice'

function ProtectedRoutes() {
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (isAuthenticated) {
            const token = user?.access
            if (token) {
                try {
                    const decodedToken = jwtDecode(token)
                    const currentTime = Date.now() / 1000
                    
                    if (decodedToken.exp <= currentTime) {
                        console.log('Token expired, logging out')
                        dispatch(logout())
                        setRedirect(true)
                    }
                } catch (error) {
                    console.log('Invalid token, logging out')
                    dispatch(logout())
                    setRedirect(true)
                }
            } else {
                dispatch(logout())
                setRedirect(true)
            }
        } else {
            setRedirect(true)
        }
    }, [isAuthenticated, user, dispatch])

    return (
        redirect ? <Navigate to="/login" replace /> : <Outlet />
    )
}

export default ProtectedRoutes