import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import Custom_Main_Button from './Custom_Main_Button';
import Location from '../assets/delivery/Location.png';
import Bill from '../assets/delivery/Bill.png';
import Phone from '../assets/delivery/Phone.png';
import Mail from '../assets/delivery/Mail.png';
import PaymentModal from './PaymentModal';
import EditIcon from '../assets/delivery/EditIcon.png';

// temporary import
import WholeChickenWhite from '../assets/products/WholeChickenWhite.jpg';


function ShippingModal({ isOpen, onClose, deliveryDetails, setIsDeliveryModalOpen }) {

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const user = useSelector((state) => state.user);

    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
   
    const topProduct = cartItems.reduce((prev, current) => 
            (current.quantity > prev.quantity) ? current : prev, cartItems[cartItems.length - 1]);


  const shippingDetails = {
    name: deliveryDetails?.fullName,
    address: `${deliveryDetails?.address}, ${deliveryDetails?.area}, ${deliveryDetails?.city}, ${deliveryDetails?.region}`,
    phoneNumber: deliveryDetails?.phoneNumber,
    email: user?.email || '',
  };
  const handleProceedToPayment = () => {
      onClose();
      setIsPaymentModalOpen(true);
  };
  
  const handlePaymentSaved = (paymentDetails) => {
    console.log("Payment processed:", paymentDetails);
    // Here you would typically handle order completion
  };

  const handleEdit = () => {
        onClose();
        setIsDeliveryModalOpen(true);
  }

  return (
    <>   
  <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Shipping"
      maxWidth="2xl"
      className="px-2 sm:px-4"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left section - Shipping details */}
        <div className="flex-1 space-y-4">
          {/* Name and address */}
          <div className="flex items-start p-4 border border-gray-200 rounded-md relative">
            <img src={Location} alt="Location" className="w-5 h-5 mt-1 mr-3" />
            <div>
              <p className="font-medium text-sm">{shippingDetails.name}</p>
              <p className="text-gray-600 text-sm">{shippingDetails.address}</p>
            </div>
            <button 
              className="absolute top-3 right-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
              onClick={handleEdit}
            >
               <img src={EditIcon} alt="Location" className="w-5 h-5" />
            </button>
          </div>
            {/* Billing address */}
          <div className="flex items-center p-4 border border-gray-200 rounded-md relative">
            <img src={Bill} alt="Bill" className="w-5 h-5 mr-3" />
            <div>
              <p className="text-sm">Bill To The Same Address</p>
            </div>
          </div>
            {/* Phone number */}
          <div className="flex items-center p-4 border border-gray-200 rounded-md relative">
            <img src={Phone} alt="Phone" className="w-5 h-5 mr-3" />
            <div>
              <p className="text-sm">{shippingDetails.phoneNumber || 'Phone Number'}</p>
            </div>
            <button className="absolute top-3 right-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={handleEdit}>
             <img src={EditIcon} alt="Location" className="w-5 h-5" />
            </button>
          </div>
          
          {/* Email */}
          {deliveryDetails.email && <div className="flex items-center p-4 border border-gray-200 rounded-md relative">
            <img src={Mail} alt="Email" className="w-5 h-5 mr-3" />
            <div>
              <p className="text-sm">{shippingDetails.email}</p>
            </div>
            <button className="absolute top-3 right-3 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={handleEdit}>
             <img src={EditIcon} alt="Location" className="w-5 h-5" />
            </button>
          </div>}

          {/* Order summary */}
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="font-semibold mb-3">Order summary</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</p>
                <p>AED {subtotal.toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-sm">Shipping Fee</p>
                <p>AED 0</p>
              </div>
              
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <p className="font-semibold">Total</p>
                <p className="font-bold">AED {subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>

        </div>
        
        
        {/* Right section - Order summary */}
        <div className="flex-1">
          {topProduct && (
            <div className="p-4 border border-gray-200 rounded-md mb-4">
              <div className="flex mb-2">
                <div className="flex-1">
                  <img 
                    src={topProduct.image} 
                    alt={topProduct.name} 
                    className="w-32 h-32 object-cover rounded-md" 
                  />
                </div>
              </div>
                <div className="mt-3">
                <h3 className="font-bold text-lg">{topProduct.name}</h3>
                <div className="flex gap-2 text-sm text-gray-600">
                            {topProduct.categories && topProduct.categories.map((category, index) => (
                                <span key={index}>{`${category} | `}</span>
                            ))}
                        </div>
                { topProduct.details &&
                <div className="mt-4 space-y-1">
                  <h4 className="font-semibold text-sm">Details</h4>
                  <ul className="text-sm space-y-1">
                    {topProduct.details.map((detail, index) => (
                    <>                    <li className="flex items-center" key={index}>
                      <span className="h-1.5 w-1.5 bg-gray-700 rounded-full mr-2"></span>
                      {detail}
                    </li>
                    </>))}
                    
                  </ul>
                </div> }
                
                <div className="mt-4 p-4 border border-gray-200 rounded-md">
                  <p className="text-red-600 font-bold text-xl">AED {topProduct.price.toFixed(2)}</p>
                  <div className="mt-2">
                    <p className="text-sm">Quantity : {topProduct.quantity}Kg</p>
                    <p className="text-sm text-gray-600">Est. arrival 1-3 hour</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          
        </div>
      </div>
      <div className="pt-6 md:pt-0 flex justify-center">
        <Custom_Main_Button
          text="Proceed to pay"
          className={`w-full border-none`}
          onClick={handleProceedToPayment}
        />
        </div>
    </Modal>
    
    <PaymentModal 
      isOpen={isPaymentModalOpen} 
      onClose={() => setIsPaymentModalOpen(false)} 
      onSavePayment={handlePaymentSaved}
    />
    </>
  );
}

export default ShippingModal;