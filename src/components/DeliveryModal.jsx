import React, { useState } from 'react';
import Modal from './Modal';
import Custom_Main_Button from './Custom_Main_Button';
import InputField from "./InputField";
import ShippingModal from './ShippingModal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/phoneInput.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { deliverySchema } from '../utils/validationSchemas';

function DeliveryModal({ isOpen, onClose, onSaveAddress, setIsDeliveryModalOpen }) {
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);

  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(deliverySchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      region: '',
      city: '',
      area: '',
      address: ''
    }
  });

  // Watch form values
  const deliveryDetails = watch();

  // Handle phone number change
  const handlePhoneChange = (value) => {
    setValue('phoneNumber', value, { shouldValidate: true });
  };

  // Form submission handler
  const onSubmit = (data) => {
    onSaveAddress(data);
    onClose();
    setIsShippingModalOpen(true);
  };

  return (
    <>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delivery Information"
      maxWidth="2xl"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <InputField 
              placeholder='Enter your full name'
              type="text"
              labelName={'Full Name'}
              compulsory={true}
              id="fullName"
              variant={errors.fullName ? 'red' : 'grey'}
              className={`!w-full !p-4 md:!p-5 my-0.5 ${errors.fullName ? 'border-red-500' : ''}`}
              labelClassName='text-sm font-medium'
              {...register('fullName')}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <label
              htmlFor='phoneNumber'
              className='text-sm font-medium'>
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country={'pk'}
                  value={field.value}
                  onChange={(phone) => handlePhoneChange(phone)}
                  inputClass={`focus:ring-2 focus:ring-primary ${errors.phoneNumber ? 'border-red-500' : 'focus:border-primary'}`}
                  containerClass={`my-0.5 ${errors.phoneNumber ? 'phone-error' : ''}`}
                  searchClass="focus:ring-2 focus:ring-primary focus:border-primary"
                  buttonClass="hover:bg-gray-50"
                  enableSearch={true}
                  disableSearchIcon={true}
                  disableCountryGuess={false}
                  autoFormat={true}
                  searchPlaceholder="Search countries"
                  disableDropdown={false}
                  countryCodeEditable={true}
                  enableClickOutside={false}
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
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
          </div>
          
          <div>
            <label htmlFor='region' className={`text-sm font-medium ${errors.region ? 'text-red-500' : ''}`}>
              Region <span className='text-red-500'>*</span>
            </label>
            <select 
              id="region" 
              className={`w-full border ${errors.region ? 'border-red-500' : 'border-gray-300'} rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 ${errors.region ? 'focus:ring-red-500' : 'focus:ring-primary'} ${errors.region ? 'focus:border-red-500' : 'focus:border-primary'} my-0.5`}
              {...register('region')}
            >
              <option value="">Choose your region</option>
              <option value="USA">USA</option>
            </select>
            {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
          </div>
          
          <div>
            <label htmlFor='city' className={`text-sm font-medium ${errors.city ? 'text-red-500' : ''}`}>
              City <span className='text-red-500'>*</span>
            </label>
            <select 
              id="city"
              className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 ${errors.city ? 'focus:ring-red-500' : 'focus:ring-primary'} ${errors.city ? 'focus:border-red-500' : 'focus:border-primary'} my-0.5`}
              {...register('city')}
            >
              <option value="">Choose your city</option>
              <option value="New-York City">NYC</option>
            </select>
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          
          <div>
            <label htmlFor='area' className={`text-sm font-medium ${errors.area ? 'text-red-500' : ''}`}>
              Area <span className='text-red-500'>*</span>
            </label>
            <select 
              id="area"
              className={`w-full border ${errors.area ? 'border-red-500' : 'border-gray-300'} rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 ${errors.area ? 'focus:ring-red-500' : 'focus:ring-primary'} ${errors.area ? 'focus:border-red-500' : 'focus:border-primary'} my-0.5`}
              {...register('area')}
            >
              <option value="">Choose your area</option>
              <option value="Time Square">Time Square</option>
            </select>
            {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area.message}</p>}
          </div>
          
          <div>
            <InputField 
              placeholder='Enter your address'
              type="text"
              labelName={'Address'}
              compulsory={true}
              id="address"
              variant={errors.address ? 'red' : 'grey'}
              className={`!w-full !p-4 md:!p-5 my-0.5 ${errors.address ? 'border-red-500' : ''}`}
              labelClassName='text-sm font-medium'
              {...register('address')}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <Custom_Main_Button
            text="Proceed"
            className="w-full border-none"
            type='submit'
          />
        </div>
      </form>
    </Modal>

    <ShippingModal 
      isOpen={isShippingModalOpen} 
      onClose={() => setIsShippingModalOpen(false)} 
      deliveryDetails={deliveryDetails}
      setIsDeliveryModalOpen={setIsDeliveryModalOpen}
    />
    </>
  );
}

export default DeliveryModal;
