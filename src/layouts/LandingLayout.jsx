import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { Outlet } from 'react-router'

function LandingLayout() {
  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </>
  )
}

export default LandingLayout