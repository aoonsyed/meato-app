import React, { useState } from 'react'
import RoundedDiv from '../../components/RoundedDiv'
import Custom_Main_Button from "../../components/Custom_Main_Button"

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
    <div className="flex flex-col items-center justify-center py-10 px-4 min-h-screen pt-36 md:pt-28">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-[#636363] font-medium text-center mb-2">
        Have questions or need support? We are here to help.
      </p>
      <p className="text-[#636363] font-medium text-center mb-10">
        Reach out to us anytime.
      </p>
      
      <RoundedDiv 
        className="p-8 w-full max-w-2xl"
        width="100%"
        height="auto"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 text-sm">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded p-2"
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
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
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
              className="w-full border border-gray-300 rounded p-2"
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
              className="w-full border border-gray-300 rounded p-2 min-h-[150px]"
              required
            />
          </div>
          
          <Custom_Main_Button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-full mt-4 mx-auto w-full max-w-[200px]"
            text='Send'
          />
        </form>
      </RoundedDiv>
    </div>
  )
}

export default ContactUs
