import email from "../assets/landingPage/emailIcon.png"
import phone from "../assets/landingPage/telephone.png"
import facebook from "../assets/landingPage/facebook-logo.png"
import instagram from "../assets/landingPage/instagram.png"
import twitter from "../assets/landingPage/twitter.png"
import linkedin from "../assets/landingPage/linkedin.png"
import youtube from "../assets/landingPage/youtube.png"
import logo from "../assets/Auth/Logo.png"
import find from "../assets/landingPage/findIcon.png"
import cartIcon from "../assets/landingPage/cartIcon.png"
import account from "../assets/landingPage/accountIcon.png"
import React, { useState } from 'react'
import { Link, NavLink } from "react-router"
import CartModal from './CartModal'
import { useSelector, useDispatch } from 'react-redux'
import { openCart, closeCart } from "../store/uiSlice"


// Temporary 
import img1 from '../assets/products/WholeChickenWhite.jpg' 
import img2 from '../assets/products/WholeChickenBlack.jpg'
import img3 from '../assets/products/mutton-chops.png'

const HeaderComponent = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
      const openingCart = () => {
          dispatch(openCart())
      };
  
      const closingCart = () => {
          dispatch(closeCart());
      };
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const socials = [
    { src: facebook, link: "https://www.facebook.com/" },
    { src: twitter, link: "https://twitter.com/" },
    { src: instagram, link: "https://www.instagram.com/" },
    { src: youtube, link: "https://www.youtube.com/" },
    { src: linkedin, link: "https://www.linkedin.com/" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex md:h-12 bg-[#AE1F25] flex-col md:flex-row">

          <div className="flex items-center my-1 mx-5 justify-center md:justify-start">
            <img src={email} alt="Email Icon" className="h-1/2 mr-2" />
            <span className="font-roboto font-semibold text-sm text-white">meatappexample@gmail.com</span>
          </div>

          <div className="flex items-center flex-grow my-1 mx-5 justify-center md:justify-start">
            <img src={phone} alt="Telephone Icon" className="h-1/2 mr-2" />
            <span className="font-roboto font-semibold text-sm text-white">012 345 6789</span>
          </div>

          <div className="flex items-center justify-end my-1 mx-auto md:mx-5">
            {socials.map((social, index) => (
              <a href={social.link} key={index} className="mx-4" target="_blank">
                <img src={social.src} alt="Social Icon" className="h-1/6" />
              </a>))}
          </div>

        </div>

        <div className="flex h-16 bg-[rgba(99,99,99,0.6)] items-center justify-between px-4 md:px-8 relative">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          
          {/* Navigation Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex items-center space-x-6 mr-auto ml-5">
            <NavLink to="/" className={({isActive})=> `font-roboto font-semibold text-xl ${isActive? "border-b-4 text-[#AE1F25] border-[#AE1F25] leading-14 px-2": "text-white"} `}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> `font-roboto font-semibold text-xl ${isActive? "border-b-4 text-[#AE1F25] border-[#AE1F25] leading-14 px-2": "text-white"} `}>About Us</NavLink>
            <NavLink to="/services"  className={({isActive})=> `font-roboto font-semibold text-xl ${isActive? "border-b-4 text-[#AE1F25] border-[#AE1F25] leading-14 px-2": "text-white"} `}>Services</NavLink>
            <NavLink to="/sell"  className={({isActive})=> `font-roboto font-semibold text-xl ${isActive? "border-b-4 text-[#AE1F25] border-[#AE1F25] leading-14 px-2": "text-white"} `}>Sell With Us</NavLink>
            <NavLink to="/news"  className={({isActive})=> `font-roboto font-semibold text-xl ${isActive? "border-b-4 text-[#AE1F25] border-[#AE1F25] leading-14 px-2": "text-white"} `}>News</NavLink>
            <NavLink to="/contact"  className={({isActive})=> `font-roboto font-semibold text-xl ${isActive? "border-b-4 text-[#AE1F25] border-[#AE1F25] leading-14 px-2": "text-white"} `}>Contact Us</NavLink>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white">
              <img src={find} alt="Search Icon" className="h-7 w-7" />
              
            </button>
            
            {/* Account Icon */}
            <button className="text-white">
              <img src={account} alt="Search Icon" className="h-7 w-7" />
            </button>
            
            {/* Cart Icon */}
            <button className="text-white">
              <img src={cartIcon} alt="Search Icon" className="h-7 w-7 cursor-pointer hover:scale-110 transition-transform duration-200" onClick={openingCart}/>              {cartItems.length > 0 && (
                    <span className="absolute top-2 right-8 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartItems.length}
                    </span>
                )}  
            </button>
            <CartModal  
                onClose={closingCart} 
                cart={cartItems} 
            />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu - Only visible when menu is toggled */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#636363] md:hidden z-50">
              <div className="flex flex-col px-4 py-2">
                <Link to="/" className="font-roboto font-medium text-white py-2" onClick={()=> setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="font-roboto font-medium text-white py-2" onClick={()=> setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/services" className="font-roboto font-medium text-white py-2" onClick={()=> setMobileMenuOpen(false)}>Services</Link>
                <Link to="/sell" className="font-roboto font-medium text-white py-2" onClick={()=> setMobileMenuOpen(false)}>Sell With Us</Link>
                <Link to="/news" className="font-roboto font-medium text-white py-2" onClick={()=> setMobileMenuOpen(false)}>News</Link>
                <Link to="/contact" className="font-roboto font-medium text-white py-2" onClick={()=> setMobileMenuOpen(false)}>Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;