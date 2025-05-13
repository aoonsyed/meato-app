import React from 'react';
import checkIcon from "../assets/landingPage/checkIcon.png";

function FeatureBadge({ text, className }) {
  return (
    <div className={`bg-[#FFBD59] text-white rounded-full py-2 px-4 flex items-center justify-center gap-2 ${className}`}>
      <img src={checkIcon} alt="Icon" />
      <span>{text}</span>
    </div>
  );
}

export default FeatureBadge;
