import React, { useState } from 'react'
import RoundedDiv from '../../components/RoundedDiv'
import Custom_Main_Button from '../../components/Custom_Main_Button'
import InputField from '../../components/InputField'
import FeatureBadge from '../../components/FeatureBadge'
import MeatTypeCheckbox from '../../components/MeatTypeCheckbox'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../../styles/phoneInput.css'
import meatBG from "../../assets/landingPage/meatBG.jpg"

function SellWithUsPge() {
  const [formData, setFormData] = useState({
    fullName: '',
    shopName: '',
    phoneNumber: '',
    email: '',
    city: '',
    message: '',
    meatTypes: {
      Chicken: false,
      Beef: false,
      Mutton: false,
      Rabbit: false,
      Camel: false,
      Duck: false,
      Fish: false,
      Turkey: false,
      Lamb: false,
      Pigeon: false
    }
  });
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePhoneChange = (phone) => {
    setFormData(prev => ({ ...prev, phoneNumber: phone }));
  };
  
  const handleMeatTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      meatTypes: {
        ...prev.meatTypes,
        [type]: !prev.meatTypes[type]
      }
    }));
  };
  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, selectedFile);
    // Handle form submission here
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center py-10 px-4 min-h-screen pt-36 md:pt-28 relative">
      
      <div className='absolute top-12 left-0 w-full h-full bg-center -z-10'
              style={{ 
                backgroundImage: `url(${meatBG})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
              }} 
            >
              <div className='absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60'/>
            </div>
      
      <h1 className="text-4xl font-bold mb-4 text-white">Sell With Us</h1>

      <RoundedDiv 
        className="p-8 w-full max-w-2xl"
        width="100%"
        height="auto"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <FeatureBadge 
            text="Instant Payouts" 
          />
          <FeatureBadge 
            text="No Listing Fees" 
          />
          <FeatureBadge 
            text="Wide Reach" 
          />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name and Shop Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <InputField 
                placeholder='Enter your full name'
                type="text"
                labelName={'Full Name'}
                compulsory={true}
                id={"fullName"}
                name={"fullName"}
                required
                value={formData.fullName}
                onChange={handleChange}
                width='100%'
                height='40px'
                className='!p-4 md:!p-5 my-0.5'
                labelClassName='text-sm font-medium'
              />
            </div>
            <div>
              <InputField 
                placeholder='Enter your shop name'
                type="text"
                labelName={'Shop Name'}
                compulsory={true}
                id={"shopName"}
                name={"shopName"}
                required
                value={formData.shopName}
                onChange={handleChange}
                width='100%'
                height='40px'
                className='!p-4 md:!p-5 my-0.5'
                labelClassName='text-sm font-medium'
              />
            </div>
          </div>
          
          {/* Phone Number and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor='phoneNumber'
                className='text-sm font-medium'>
                Phone Number <span className='text-red-500'>*</span>
              </label>
              <PhoneInput
                country={'pk'}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputClass="focus:ring-2 focus:ring-primary focus:border-primary"
                containerClass="my-0.5"
                searchClass="focus:ring-2 focus:ring-primary focus:border-primary"
                buttonClass="hover:bg-gray-50"
                enableSearch={true}
                disableSearchIcon={true}
                disableCountryGuess={true}
                searchPlaceholder="Search countries"
                disableDropdown={false}
                countryCodeEditable={true}
                enableClickOutside={true}
                disableCountryCode={false}
                enableAreaCodes={false}
                onlyCountries={[]}
                preferredCountries={['pk', 'us', 'gb', 'ca', 'au']}
                inputProps={{
                  name: 'phoneNumber',
                  id: 'phoneNumber',
                  required: true,
                  placeholder: 'Enter your phone number',
                  onWheel: (e) => e.target.blur(),
                }}
              />
            </div>
            <div>
              <InputField 
                placeholder='Enter your email'
                type="email"
                labelName={'Email'}
                compulsory={true}
                id={"email"}
                name={"email"}
                required
                value={formData.email}
                onChange={handleChange}
                width='100%'
                height='40px'
                className='!p-4 md:!p-5 my-0.5'
                labelClassName='text-sm font-medium'
              />
            </div>
          </div>
          
          {/* City */}
          <div>
            <label htmlFor='city' className='text-sm font-medium'>City <span className='text-red-500'>*</span></label>
            <select 
              name="city" 
              id="city" 
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5"
            >
              <option value="">Select your city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div>
          
          {/* Meat Types */}
          <div>
            <label className='text-sm font-medium'>
              Meat Types You Sell
            </label>
            <div className="flex flex-wrap mt-2">
              {Object.keys(formData.meatTypes).map((type) => (
                <MeatTypeCheckbox
                  key={type}
                  type={type}
                  checked={formData.meatTypes[type]}
                  onChange={() => handleMeatTypeChange(type)}
                />
              ))}
            </div>
          </div>
          
          {/* Message */}
          <div>
            <label htmlFor="message" className='text-sm font-medium'>
              Message / About Your Shop
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5 min-h-[120px]"
            />
          </div>
          
          {/* Upload Photos */}
          <div>
            <label htmlFor="photos" className='text-sm font-medium'>
              Upload Photos
            </label>
            <div className="mt-1">
              <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <span className="font-medium text-gray-600">
                    {selectedFile ? selectedFile.name : "Choose file"}
                  </span>
                </span>
                <input 
                  id="photos" 
                  name="photos" 
                  type="file" 
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Custom_Main_Button
              text="Submit Application"
              className="w-full border-none"
              type='submit'
            />
          </div>
        </form>
      </RoundedDiv>
    </div>
    </>
  )
}

export default SellWithUsPge