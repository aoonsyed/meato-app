import React from 'react';

const StatBox = ({ number, label }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm">
      <div className="text-4xl lg:text-5xl font-medium text-[#343434] font-playfair">{number}</div>
      <div className="text-[#636363] mt-2 text-center">{label}</div>
    </div>
  );
};

export default StatBox;