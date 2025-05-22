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
import removeIcon from "../../assets/cart/Remove.png"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { sellWithUsSchema } from '../../utils/validationSchemas'

function SellWithUsPge() {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const { 
    control, 
    register, 
    handleSubmit: handleFormSubmit, 
    formState: { errors }, 
    setValue, 
    watch 
  } = useForm({
    resolver: yupResolver(sellWithUsSchema),
    defaultValues: {
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
    }
  });
  
  const watchMeatTypes = watch("meatTypes");
  
  const handleMeatTypeChange = (type) => {
    setValue(
      `meatTypes.${type}`, 
      !watchMeatTypes[type], 
      { shouldValidate: true }
    );
  };
  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFiles(prevFiles => [...prevFiles, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = (data) => {
    if (selectedFiles.length === 0) {
      toast.error('Please upload at least one photo.');
      return;
    }

    // Form data and selected files are valid
    console.log('Form submitted:', data, selectedFiles);

    toast.success('Application submitted successfully!', {
      duration: 3500,
    });
    
    // Reset form
    setValue('fullName', '');
    setValue('shopName', '');
    setValue('phoneNumber', '');
    setValue('email', '');
    setValue('city', '');
    setValue('message', '');
    
    // Reset meat types
    Object.keys(watchMeatTypes).forEach(type => {
      setValue(`meatTypes.${type}`, false);
    });
    
    setSelectedFiles([]);
    
    navigate('/');
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center py-10 px-4 min-h-screen pt-36 md:pt-28 relative">
      
      <div className='fixed inset-0 w-full h-full bg-center -z-10'
              style={{ 
                backgroundImage: `url(${meatBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }} 
            >
              <div className='absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60'/>
            </div>
      

      <RoundedDiv 
        className="p-8 w-full max-w-2xl"
        width="100%"
        height="auto"
      >
      <h1 className="text-4xl font-bold text-center mb-5">Sell With Us</h1>

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
        
        <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-6">
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
                {...register("fullName")}
                width='100%'
                height='40px'
                className={`!p-4 md:!p-5 my-0.5 ${errors.fullName ? 'border-red-500' : ''}`}
                labelClassName='text-sm font-medium'
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <InputField 
                placeholder='Enter your shop name'
                type="text"
                labelName={'Shop Name'}
                compulsory={true}
                id={"shopName"}
                name={"shopName"}
                {...register("shopName")}
                width='100%'
                height='40px'
                className={`!p-4 md:!p-5 my-0.5 ${errors.shopName ? 'border-red-500' : ''}`}
                labelClassName='text-sm font-medium'
              />
              {errors.shopName && (
                <p className="text-red-500 text-xs mt-1">{errors.shopName.message}</p>
              )}
            </div>
          </div>
          
          {/* Phone Number and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor='phoneNumber'
                className='text-sm font-medium'>
                Phone Number<span className='text-red-500'>*</span>
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    country={'pk'}
                    value={value}
                    onChange={onChange}
                    inputClass={`focus:ring-2 focus:ring-primary ${errors.phoneNumber ? 'border-red-500' : 'focus:border-primary'}`}
                    containerClass="my-0.5"
                    searchClass="focus:ring-2 focus:ring-primary focus:border-primary"
                    buttonClass="hover:bg-gray-50"
                    enableSearch={true}
                    disableSearchIcon={true}
                    disableCountryGuess={false}
                    autoFormat={true}
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
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div>
              <InputField 
                placeholder='Enter your email'
                type="email"
                labelName={'Email'}
                compulsory={true}
                id={"email"}
                name={"email"}
                {...register("email")}
                width='100%'
                height='40px'
                className={`!p-4 md:!p-5 my-0.5 ${errors.email ? 'border-red-500' : ''}`}
                labelClassName='text-sm font-medium'
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          {/* City */}
          <div>
            <label htmlFor='city' className='text-sm font-medium'>City<span className='text-red-500'>*</span></label>
            <select 
              id="city" 
              {...register("city")}
              className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5 cursor-pointer`}
            >
              <option value="">Select your city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
            )}
          </div>
          
          {/* Meat Types */}
          <div>
            <label className='text-sm font-medium'>
              Meat Types You Sell<span className='text-red-500'>*</span>
            </label>
            <div className="flex flex-wrap mt-2">
              {Object.keys(watchMeatTypes).map((type) => (
                <MeatTypeCheckbox
                  key={type}
                  type={type}
                  checked={watchMeatTypes[type]}
                  onChange={() => handleMeatTypeChange(type)}
                />
              ))}
            </div>
            {errors.meatTypes && (
              <p className="text-red-500 text-xs mt-1">{errors.meatTypes.message}</p>
            )}
          </div>
          
          {/* Message */}
          <div>
            <label htmlFor="message" className='text-sm font-medium'>
              Message / About Your Shop<span className='text-red-500'>*</span>
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Write your message..."
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5 min-h-[120px]`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          
          {/* Upload Photos */}
          <div>
            <label htmlFor="photos" className='text-sm font-medium'>
              Upload Photos<span className='text-red-500'>*</span>
            </label>
            <div className={`mt-1 ${selectedFiles.length === 0 ? 'border-red-500' : ''}`}>
              <label className={`flex w-full px-4 transition bg-white border-2 ${selectedFiles.length === 0 && errors.meatTypes ? 'border-red-500' : 'border-gray-300'} rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none flex-wrap h-auto`}>
                { selectedFiles.length === 0 &&
                <div className='bg-[#D8D8D8] flex items-center justify-center rounded-xl m-1 px-3 '>
                  <span>
                    Choose files
                  </span>
                </div>}

                {
                  selectedFiles.length > 0 && (
                      selectedFiles.map((file, index) => (
                        <div key={index} className='bg-[#D8D8D8] flex items-center justify-center rounded-xl m-1 p-2 relative font-semibold'>
                          {file.name}
                          <div 
                            className="absolute -top-1 -right-1 w-4 h-4 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              removeFile(index);
                            }}
                          >
                            <img 
                              src={removeIcon} 
                              alt="Remove" 
                              className="h-4 w-4"
                            />
                          </div>
                        </div>
                      ))
                  )
                }

                <input 
                  id="photos" 
                  name="photos" 
                  type="file" 
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            
          </div>
          
          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Custom_Main_Button
              text="Submit Application"
              className="w-full"
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