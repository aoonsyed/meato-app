import React from 'react';
import checkIcon from "../assets/landingPage/checkIcon.png";

function FeatureBadge({ text, className }) {
  return (
    <div className={`bg-[#FFBD59] text-white rounded-xl py-4 px-8 flex items-center justify-center gap-2 ${className}`}>
      <img src={checkIcon} alt="Icon" />
      <span>{text}</span>
    </div>
  );
}

export default FeatureBadge;
