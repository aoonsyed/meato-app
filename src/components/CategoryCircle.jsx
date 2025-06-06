import React from 'react';

const CategoryCircle = ({ icon, title, onClick }) => {
  return (
    <div className='flex flex-col items-center' title={title}>
      <div className='bg-red-50 rounded-full w-32 h-32 flex items-center justify-center cursor-pointer' onClick={onClick} title={title}>
        <img src={icon} title={title} alt={title} className='w-16 h-16' />
      </div>
      <h3 className='text-xl font-medium mt-4'>{title}</h3>
    </div>
  );
};

export default CategoryCircle;