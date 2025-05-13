import React, { useState } from 'react';
import Modal from './Modal';
import Custom_Main_Button from './Custom_Main_Button';
import InputField from "./InputField"
import ShippingModal from './ShippingModal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import '../styles/phoneInput.css';

function DeliveryModal({ isOpen, onClose, onSaveAddress,setIsDeliveryModalOpen }) {


    const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);


  const [deliveryDetails, setDeliveryDetails] = useState({
    fullName: '',
    phoneNumber: '',
    region: '',
    city: '',
    area: '',
    address: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePhoneChange = (phone) => {
    setDeliveryDetails(prev => ({ ...prev, phoneNumber: phone }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveAddress(deliveryDetails);
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <InputField 
            placeholder='Enter your full name'
            type="text"
            labelName={'Full Name'}
            compulsory={true}
            id={"fullName"}
            name={"fullName"}
            required
            value={deliveryDetails.fullName}
            onChange={handleChange}
            width='100%'
            height='30px'
            className='!p-4 md:!p-5 my-0.5'
            labelClassName='text-sm font-medium'
            />
          </div>
          <div>
            <label
            htmlFor='phoneNumber'
            className='text-sm font-medium'>
              Phone Number <span className='text-red-500'>*</span>
              </label>
              <PhoneInput
                country={'pk'}
                value={deliveryDetails.phoneNumber}
                onChange={handlePhoneChange}
                inputClass="focus:ring-2 focus:ring-primary focus:border-primary"
                containerClass="my-0.5"
                searchClass="focus:ring-2 focus:ring-primary focus:border-primary"
                buttonClass="hover:bg-gray-50"
                enableSearch={true}
                disableSearchIcon={true}
                disableCountryGuess={false}
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
          </div>
          <div>
            <label htmlFor='region' className='text-sm font-medium'>Region <span className='text-red-500'>*</span></label>
            <select 
              name="region" 
              id="region" 
              value={deliveryDetails.region}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5"
            >
              <option value="">Choose your region</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div>
            <label htmlFor='city' className='text-sm font-medium'>City <span className='text-red-500'>*</span></label>
            <select 
              name="city" 
              id="city" 
              value={deliveryDetails.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5"
            >
              <option value="">Choose your city</option>
              <option value="New-York City">NYC</option>
            </select>
          </div>
          <div>
            <label htmlFor='area' className='text-sm font-medium'>Area <span className='text-red-500'>*</span></label>
            <select 
              name="area" 
              id="area" 
              value={deliveryDetails.area}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md h-[40px] px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary my-0.5"
            >
              <option value="">Choose your area</option>
              <option value="Time Square">Time Square</option>
            </select>
          </div>
          <div>
            <InputField 
            placeholder='Enter your address'
            type="text"
            labelName={'Address'}
            compulsory={true}
            id={"address"}
            name={"address"}
            required
            value={deliveryDetails.address}
            onChange={handleChange}
            width='100%'
            height='30px'
            className='!p-4 md:!p-5 my-0.5'
            labelClassName='text-sm font-medium'
            />
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
