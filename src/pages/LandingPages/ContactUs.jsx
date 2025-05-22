import React from 'react'
import RoundedDiv from '../../components/RoundedDiv'
import Custom_Main_Button from "../../components/Custom_Main_Button"
import InputField from "../../components/InputField"
import meatBG from "../../assets/landingPage/meatBG.jpg"
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactUsSchema } from '../../utils/validationSchemas';
import toast from 'react-hot-toast';

function ContactUs() {
  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(contactUsSchema)
  });

  // Form submission handler
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the form data to your backend
    
    toast.success('Your message has been sent successfully!');
    reset(); // Clear the form after submission
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between py-6 md:py-10 px-4 md:px-10 lg:px-20 min-h-screen max-w-7xl mx-auto pt-24 md:pt-20 gap-8 md:gap-4">

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
      <div className="flex flex-col items-start justify-start w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0 text-white">
        <div className='mb-5 md:mb-8'>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-6">Get In Touch</h1>
          <p className="mb-4 md:mb-8 font-semibold text-xl md:text-2xl">Contact us if you have more questions.</p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-red-700 rounded-md p-2 md:p-3 flex items-center justify-center min-w-12 md:min-w-16 h-12 md:h-16">
              <FaEnvelope className="text-white text-lg md:text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl">Email</p>
              <p className="font-medium text-sm md:text-base">meatexpert@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-red-700 rounded-md p-2 md:p-3 flex items-center justify-center min-w-12 md:min-w-16 h-12 md:h-16">
              <FaWhatsapp className="text-white text-lg md:text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl">Messages</p>
              <p className="font-medium text-sm md:text-base">Send us a message on WhatsApp:</p>
              <p className="font-medium text-sm md:text-base">+12345678910</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-red-700 rounded-md p-2 md:p-3 flex items-center justify-center min-w-12 md:min-w-16 h-12 md:h-16">
              <FaPhone className="text-white text-lg md:text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl">Phone</p>
              <p className="font-medium text-sm md:text-base">+12345678910</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-red-700 rounded-md p-2 md:p-3 flex items-center justify-center min-w-12 md:min-w-16 h-12 md:h-16">
              <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl">Address</p>
              <p className="font-medium text-sm md:text-base">1234 Elm Street, Apt. 5B, Springfield, IL</p>
              <p className="font-medium text-sm md:text-base">62704, USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <RoundedDiv 
        className="p-4 sm:p-6 md:p-8 !w-full md:!w-1/2 shadow-lg bg-white mb-8"
        height="auto"
      >
        <h1 className='font-bold text-center text-2xl md:text-3xl mb-1'>Submit Your Query</h1>
        <p className='font-normal text-center text-xs sm:text-sm mb-4 md:mb-6'>Ask anything and we will respond quickly</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-5">
          <div>
            <InputField
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              width="100%"
              className={`w-full ${errors.fullName ? 'border-red-500' : ''}`}
              variant={errors.fullName ? 'red' : 'grey'}
              labelName="Full Name"
              labelClassName="block mb-1 text-sm"
              compulsory={true}
              {...register('fullName')}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <InputField
              type="text"
              id="email"
              placeholder="Enter your email"
              width="100%"
              className={`w-full ${errors.email ? 'border-red-500' : ''}`}
              variant={errors.email ? 'red' : 'grey'}
              labelName="Email"
              labelClassName="block mb-1 text-sm"
              compulsory={true}
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <InputField
              type="text"
              id="subject"
              placeholder="Write a subject"
              width="100%"
              className={`w-full ${errors.subject ? 'border-red-500' : ''}`}
              variant={errors.subject ? 'red' : 'grey'}
              labelName="Subject"
              labelClassName="block mb-1 text-sm"
              compulsory={true}
              {...register('subject')}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message<span className='text-red-500'>*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded p-3 md:p-5 min-h-[100px] md:min-h-[120px] font-inter font-semibold shadow-[0_1px_2px_0_#1018280D] focus:border-black focus:outline-none`}
              {...register('message')}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-2 md:mt-4">
            <button 
              type="button" 
              className="border border-[#FFB752] rounded-full py-2 px-6 md:px-8 text-[#AE1F25] font-semibold hover:bg-gray-50 cursor-pointer w-full sm:w-[45%] order-2 sm:order-1"
              onClick={() => reset()}
            >
              Cancel
            </button>
            
            <Custom_Main_Button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 md:px-8 rounded-full order-1 sm:order-2"
              width='100% sm:w-[45%]'
              text='Send'
            />
          </div>
        </form>
      </RoundedDiv>
    </div>
  )
}

export default ContactUs
