import React from 'react';
import CustomMainButton from './Custom_Main_Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ image, name, weight, price, originalPrice, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    if (id){
      navigate(`/product/${id}`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({
      id,
      name,
      price,
      image,
      quantity: 1
    }));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" onClick={handleClick}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl">
          {name} <span className="text-sm text-gray-500">({weight})</span>
        </h3>
        <div className="flex items-center justify-between mt-5">
          <div className='flex flex-col items-center justify-center font-semibold text-sm'>
            <span className="font-bold text-[#AD1F23]">AED {price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                AED {originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <CustomMainButton
            text='ADD'
            variant='outline'
            height='auto'
            width='auto'
            fontSize='12px'
            className='px-5 py-1'
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;