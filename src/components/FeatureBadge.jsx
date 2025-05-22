import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function FeatureBadge({ text, className }) {
  return (
    <div className={`bg-gradient-to-r from-red-700 to-red-900 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <FaCheckCircle className="text-green-400 text-xl" />
      <span className='font-medium'>{text}</span>
    </div>
  );
}

export default FeatureBadge;
