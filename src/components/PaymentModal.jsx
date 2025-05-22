import React, { useState } from 'react';
import Modal from './Modal';
import Custom_Main_Button from './Custom_Main_Button';
import InputField from "./InputField";
import { toast } from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cardPaymentSchema } from '../utils/validationSchemas';

function PaymentModal({ isOpen, onClose, onSavePayment }) {
  const [paymentMethod, setPaymentMethod] = useState('online'); // 'online' or 'cash'

  // Initialize react-hook-form for card payment
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue,
    control,
    watch
  } = useForm({
    resolver: yupResolver(cardPaymentSchema),
    mode: 'onChange'
  });

  // Watch form values for real-time validation
  const cardValues = watch();

  // Handle card number input (format and restrict)
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 16) {
      setValue('cardNumber', numericValue, { shouldValidate: true });
    }
  };

  // Handle CVV input (format and restrict)
  const handleCvvChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 4) {
      setValue('cvv', numericValue, { shouldValidate: true });
    }
  };

  // Handle expiry date input (format and restrict)
  const handleExpiryChange = (e) => {
    const value = e.target.value;
    // Remove all non-numeric characters
    const numericInput = value.replace(/\D/g, '');
    
    let formattedValue = '';
    
    // Format as MM/YY
    if (numericInput.length > 0) {
      // Handle first digit of month (can only be 0 or 1)
      if (numericInput[0] > 1) {
        formattedValue = '0' + numericInput[0];
      } else {
        formattedValue = numericInput[0];
      }
      
      // Handle second digit of month (if first digit is 1, second can only be 0-2)
      if (numericInput.length > 1) {
        if (formattedValue === '1' && numericInput[1] > 2) {
          formattedValue += '2';
        } else {
          formattedValue += numericInput[1];
        }
      }
      
      // Add slash after month
      if (numericInput.length > 2) {
        formattedValue = formattedValue.substring(0, 2) + '/' + numericInput.substring(2);
      }
    }
    
    // Limit to MM/YY format (5 characters)
    if (formattedValue.length <= 5) {
      setValue('expiry', formattedValue, { shouldValidate: true });
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Form submission handler
  const onSubmit = (data) => {
    toast.success('Order placed successfully!');
    onSavePayment({ paymentMethod, ...(paymentMethod === 'online' ? data : {}) });
    onClose();
  };

  // Handle submission for cash payment (no validation needed)
  const handleCashSubmit = (e) => {
    e.preventDefault();
    toast.success('Order placed successfully!');
    onSavePayment({ paymentMethod: 'cash' });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Payment Details"
      maxWidth="xl"
    >
      <div className=" mb-4"></div>
      <div className="flex mb-6 gap-4 justify-center">
        <Custom_Main_Button 
          text="Online Payment"
          type="button"
          width="200px"
          onClick={() => handlePaymentMethodChange('online')}
          className={`!text-sm rounded-sm ${paymentMethod === 'online' ? 'bg-[#AE1F25] text-white' : 'bg-white text-black border border-gray-300'}`}
          variant={paymentMethod === 'online' ? 'primary' : 'outline'}
        />
        <Custom_Main_Button
          text="Cash on delivery"
          type="button"
          width="200px"
          onClick={() => handlePaymentMethodChange('cash')}
          className={`!text-sm rounded-sm ${paymentMethod === 'cash' ? 'bg-[#AE1F25] text-white' : 'bg-white text-black border border-gray-300'}`}
          variant={paymentMethod === 'cash' ? 'primary' : 'outline'}
        />
      </div>
      
      {paymentMethod === 'online' && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <InputField 
                placeholder="Enter your name on card"
                type="text"
                labelName="Name on Card"
                compulsory={true}
                id="nameOnCard"
                variant={errors.nameOnCard ? 'red' : 'grey'}
                className={`!w-full !p-4 md:!p-5 my-0.5 ${errors.nameOnCard ? 'border-red-500' : ''}`}
                labelClassName="text-sm font-medium"
                maxLength={16}
                {...register('nameOnCard')}
              />
              {errors.nameOnCard && <p className="text-red-500 text-xs mt-1">{errors.nameOnCard.message}</p>}
            </div>

            <div>
              <InputField 
                placeholder="Enter your card number"
                type="text"
                labelName="Card Number"
                compulsory={true}
                id="cardNumber"
                variant={errors.cardNumber ? 'red' : 'grey'}
                className={`!w-full !p-4 md:!p-5 my-0.5 ${errors.cardNumber ? 'border-red-500' : ''}`}
                labelClassName="text-sm font-medium"
                value={cardValues.cardNumber || ''}
                onChange={handleCardNumberChange}
                maxLength={16}
                {...register('cardNumber')}
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputField 
                  placeholder="Enter CVV"
                  type="text"
                  labelName="CVV"
                  compulsory={true}
                  id="cvv"
                  variant={errors.cvv ? 'red' : 'grey'}
                  className={`!p-4 md:!p-5 my-0.5 ${errors.cvv ? 'border-red-500' : ''}`}
                  labelClassName="text-sm font-medium"
                  value={cardValues.cvv || ''}
                  onChange={handleCvvChange}
                  maxLength={4}
                  {...register('cvv')}
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv.message}</p>}
              </div>

              <div>
                <Controller
                  name="expiry"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputField
                      placeholder="MM/YY"
                      type="text"
                      labelName="Expiry"
                      compulsory={true}
                      id="expiry"
                      variant={error ? 'red' : 'grey'}
                      className={`!p-4 md:!p-5 my-0.5 ${error ? 'border-red-500' : ''}`}
                      labelClassName="text-sm font-medium"
                      maxLength={5}
                      value={value || ''}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/\D/g, '');
                        let formatted = '';
                        if (raw.length <= 2) {
                          formatted = raw;
                        } else {
                          formatted = raw.slice(0, 2) + '/' + raw.slice(2, 4);
                        }
                        onChange(formatted); // properly update form state
                      }}
                    />
                  )}
                />
                {errors.expiry && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiry.message}</p>
)}
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <Custom_Main_Button
              text="Enter"
              className="w-full border-none"
              variant="primary"
              type="submit"
            />
          </div>
        </form>
      )}
      
      {paymentMethod === 'cash' && (
        <form onSubmit={handleCashSubmit} className="space-y-4">
          <p className="text-gray-700 text-center">
            You will pay when your order is delivered.
          </p>
          
          <div className="pt-4 flex justify-center">
            <Custom_Main_Button
              text="Confirm Order"
              className="w-full border-none"
              variant="primary"
              type="submit"
            />
          </div>
        </form>
      )}
    </Modal>
  );
}

export default PaymentModal;
