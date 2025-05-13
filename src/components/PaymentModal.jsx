import React, { useState } from 'react';
import Modal from './Modal';
import Custom_Main_Button from './Custom_Main_Button';
import InputField from "./InputField"

function PaymentModal({ isOpen, onClose, onSavePayment }) {
  const [paymentMethod, setPaymentMethod] = useState('online'); // 'online' or 'cash'
  const [paymentDetails, setPaymentDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    expiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSavePayment({ paymentMethod, ...(paymentMethod === 'online' ? paymentDetails : {}) });
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
      </div>      {paymentMethod === 'online' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <InputField 
                placeholder="Enter your name on card"
                type="text"
                labelName="Name on Card"
                compulsory={true}
                id="nameOnCard"
                name="nameOnCard"
                required
                value={paymentDetails.nameOnCard}
                onChange={handleChange}
                width="100%"
                height="45px"
                className="!p-4 md:!p-5 my-0.5"
                labelClassName="text-sm font-medium"
              />
            </div>

            <div>
              <InputField 
                placeholder="Enter your card number"
                type="text"
                labelName="Card Number"
                compulsory={true}
                id="cardNumber"
                name="cardNumber"
                required
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                width="100%"
                height="45px"
                className="!p-4 md:!p-5 my-0.5"
                labelClassName="text-sm font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputField 
                  placeholder="Enter CVV"
                  type="text"
                  labelName="CVV"
                  compulsory={true}
                  id="cvv"
                  name="cvv"
                  required
                  value={paymentDetails.cvv}
                  onChange={handleChange}
                  width="100%"
                  height="45px"
                  className="!p-4 md:!p-5 my-0.5"
                  labelClassName="text-sm font-medium"
                />
              </div>

              <div>
                <InputField 
                  placeholder="MM/YY"
                  type="text"
                  labelName="Expiry"
                  compulsory={true}
                  id="expiry"
                  name="expiry"
                  required
                  value={paymentDetails.expiry}
                  onChange={handleChange}
                  width="100%"
                  height="45px"
                  className="!p-4 md:!p-5 my-0.5"
                  labelClassName="text-sm font-medium"
                />
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
      )}      {paymentMethod === 'cash' && (
        <form onSubmit={handleSubmit} className="space-y-4">
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
