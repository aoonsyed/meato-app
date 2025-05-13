import React, { useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { Outlet, useLocation } from 'react-router'

function LandingLayout() {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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