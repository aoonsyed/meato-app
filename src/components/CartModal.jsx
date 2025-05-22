import React, {useState} from 'react';
import remove from "../assets/cart/Remove.png";
import Custom_Main_Button from "./Custom_Main_Button";
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../store/cartSlice';
import DeliveryModal from './DeliveryModal';

function CartModal({ onClose, cart }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state)=> state.ui.isCartOpen)
  
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({
        ...item,
        quantity: -1 // Negative quantity for decreasing
      }));
    }
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart({
      ...item,
      quantity: 1 // Add one more
    }));
  };

  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);

  const handleCheckout = () => {
    onClose();
    setIsDeliveryModalOpen(true);
  }
  const onDeliveryModalClose = () => {
    setIsDeliveryModalOpen(false);
  }

  const handleSaveAddress = (address) => {
    console.log("Address saved:", address);
  }


  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Your Cart"
      maxWidth="md"
    //   className="justify-end items-start"
    >
      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-start border-b border-gray-200 pb-4">
            <div className="w-20 h-20 mr-3 flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-xs mb-1">{`(${Math.ceil(item.price)} / kg)`}</p>
                </div>                <button 
                  className="cursor-pointer hover:scale-110 transition-transform duration-200" 
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  <img src={remove} alt="Remove" className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center border border-gray-200 rounded">                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="px-2 py-1 text-sm cursor-pointer hover:scale-110 transition-transform duration-200"
                  >
                    −
                  </button>
                  <span className="px-2 text-sm font-medium">{item.quantity}kg</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="px-2 py-1 text-sm cursor-pointer hover:scale-110 transition-transform duration-200"
                  >
                    +
                  </button>
                </div>
                <p className="font-medium text-sm">AED {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary */}
      {cart.length > 0 ? (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm">Subtotal ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})</p>
            <div className='border-b border-dashed border-[#D8D8D8s] flex-grow mx-5'></div> 
            <p className="font-medium">AED {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Shipping Fee</p>
            <div className='border-b border-dashed border-[#D8D8D8s] flex-grow mx-5'></div> 
            <p className="font-medium">AED  0</p>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <p className="font-medium">Total</p>
            <div className='border-b border-dashed border-[#D8D8D8s] flex-grow mx-5'></div> 
            <p className="font-bold">AED {subtotal.toFixed(2)}</p>
          </div>
          
          <div className="pt-4 flex justify-center">
            <Custom_Main_Button
              text="Check Out"
              className="w-full border-none"
              onClick={handleCheckout}
            />
          </div>
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      )}    </Modal>
      
      <DeliveryModal isOpen={isDeliveryModalOpen} onClose={onDeliveryModalClose} onSaveAddress={handleSaveAddress} setIsDeliveryModalOpen={setIsDeliveryModalOpen}/>
    </>
      
  );
}

export default CartModal;