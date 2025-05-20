import React, { useState } from 'react'
import RoundedDiv from '../../components/RoundedDiv'
import Custom_Main_Button from "../../components/Custom_Main_Button"
import meatBG from "../../assets/landingPage/meatBG.jpg"

import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-10 lg:px-20 min-h-screen max-w-7xl mx-auto pt-10 md:pt-0 md:h-screen">

      <div className='fixed inset-0 w-full h-full bg-center -z-10'
                  style={{ 
                    backgroundImage: `url(${meatBG})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                  }} 
                >
    <div className='absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60'/>
    </div>


      {/* Left Section: Contact Information */}
      <div className="flex flex-col items-start justify-evenly w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 h-auto text-white">
        <div className='my-5'>
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="mb-8 font-semibold text-2xl">Contact us if you have more questions.</p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center gap-4">
            <div className="bg-red-700 rounded-md p-3 flex items-center justify-center min-w-16 h-16">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <p className="font-semibold text-xl">Email</p>
              <p className="font-medium">meatappexample@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-700 rounded-md p-3 flex items-center justify-center min-w-16 h-16">
              <FaWhatsapp className="text-white text-xl" />
            </div>
            <div>
              <p className="font-semibold text-xl">Messages</p>
              <p className="font-medium">Send us a message on WhatsApp:</p>
              <p className="font-medium">+12345678910</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-700 rounded-md p-3 flex items-center justify-center min-w-16 h-16">
              <FaPhone className="text-white text-xl" />
            </div>
            <div>
              <p className="font-semibold text-xl">Phone</p>
              <p className="font-medium">+12345678910</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-700 rounded-md p-3 flex items-center justify-center min-w-16 h-16">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="font-semibold text-xl">Address</p>
              <p className="font-medium">1234 Elm Street, Apt. 5B, Springfield, IL</p>
              <p className="font-medium">62704, USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <RoundedDiv 
        className="p-8 !w-full md:!w-1/2 shadow-lg bg-white"
        // width="100%"
        height="auto"
      >
        <h1 className='font-bold text-center text-3xl mb-1'>Submit Your Query</h1>
        <p className='font-normal text-center text-sm mb-6'>Ask anything and we will respond quickly</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-200 rounded p-2.5"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded p-2.5"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-1 text-sm">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Write a subject"
              className="w-full border border-gray-200 rounded p-2.5"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border border-gray-200 rounded p-2.5 min-h-[120px]"
              required
            />
          </div>
          
          <div className="flex justify-between mt-4">
            <button 
              type="button" 
              className="border border-[#FFB752] rounded-full py-2 px-8 text-[#AE1F25] font-semibold hover:bg-gray-50 cursor-pointer w-[45%]"
              onClick={() => setFormData({fullName: '', email: '', subject: '', message: ''})}
            >
              Cancel
            </button>
            
            <Custom_Main_Button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white py-2 px-8 rounded-full"
              width='45%'
              text='Send'
            />
          </div>
        </form>
      </RoundedDiv>
    </div>
  )
}

export default ContactUs
