import React from 'react';

function MeatTypeCheckbox({ type, checked, onChange }) {
  return (
    <label 
      className={`inline-block px-4 py-2 rounded-full cursor-pointer text-center m-1 transition-colors
                 ${checked ? 'bg-[#FFC6C7] text-[#AE1F25] border-none font-bold' : 'bg-gray-100 text-gray-500 border-gray-300'}
                 border hover:bg-[#FFC6C7]`}
    >
      <input 
        type="checkbox" 
        value={type} 
        checked={checked}
        onChange={onChange}
        className="hidden" 
      />
      {type}
    </label>
  );
}

export default MeatTypeCheckbox;
