import React from 'react';
import CustomMainButton from './Custom_Main_Button';

const ProductCard = ({ image, name, weight, price, originalPrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
          {/* <button className="px-3 py-1 border border-red-500 text-red-500 rounded text-sm hover:bg-red-500 hover:text-white transition-colors">
            ADD
          </button> */}
          <CustomMainButton
          text='ADD'
          variant='outline'
          height='auto'
          width='auto'
          fontSize='12px'
          className='px-5 py-1'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;