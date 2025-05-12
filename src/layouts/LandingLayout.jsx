import React, { useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { Outlet, useLocation } from 'react-router'

function LandingLayout() {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </>
  )
}

export default LandingLayout