import React from 'react';
import email from "../assets/landingPage/emailIcon.png"
import phone from "../assets/landingPage/telephone.png"
import facebook from "../assets/landingPage/facebook-logo.png"
import instagram from "../assets/landingPage/instagram.png"
import twitter from "../assets/landingPage/twitter.png"
import linkedin from "../assets/landingPage/linkedin.png"
import youtube from "../assets/landingPage/youtube.png"
import logo from "../assets/Auth/Logo.png"
import CustomMainButton from "./Custom_Main_Button"
import GalleryImg from "../assets/products/mutton-chops.png"

const socials = [
    { src: facebook, link: "https://www.facebook.com/" },
    { src: twitter, link: "https://twitter.com/" },
    { src: instagram, link: "https://www.instagram.com/" },
    { src: youtube, link: "https://www.youtube.com/" },
    { src: linkedin, link: "https://www.linkedin.com/" },
]

const FooterComponent = () => {
  return (
    <footer className="bg-[#222222] text-white p-12 mt-12">
      <div className="container mx-auto">
        <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap">
          {/* Brand Section */}
          <div className="w-full md:w-1/3 flex flex-col items-start">
            <div className="py-4">
              <img src={logo} alt="Logo" className='w-3/4' />
            </div>
            <h3 className="text-xl font-bold mb-6">Premium Farm-Fresh Meat Delivered</h3>
            <h3 className="text-xl font-bold mb-6">Hygienically to Your Doorstep.</h3>
            <div className="w-full max-w-[250px]">
              <CustomMainButton 
                text="Contact Us" 
              />
            </div>
          </div>

          {/* Explore Section */}
          <div className="w-full md:w-1/6 ">
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Place Order</a></li>
              <li><a href="#" className="hover:text-gray-300">Our Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Latest News</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <p className="mb-4">1234 Elm Street, Apt. 5B, Springfield, IL 62704, USA</p>
            
            <div className="flex items-center mb-4 gap-2">
              <img src={email} alt="Email icon" className="w-5 h-5" />
              <a href="mailto:meatapp@gmail.com" className="text-red-500">meatapp@gmail.com</a>
            </div>
            
            <div className="flex items-center mb-6 gap-2">
              <img src={phone} alt="Phone icon" className="w-5 h-5" />
              <a href="tel:0123456789" className="text-white">012 345 6789</a>
            </div>
            
            <div className="flex space-x-3">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black rounded-full p-2 flex items-center justify-center w-8 h-8"
                >
                  <img src={social.src} alt="Social media" className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-6">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={GalleryImg} 
                    alt="Meat product gallery" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;