import React from 'react';

const CustomMainButton = ({
  height = "42px",
  width = "257px",
  text = "Click Me", 
  onClick, 
  type = "button", 
  variant = "primary",
  className = "",
  fontSize = "20px",
  fontWeight = "600",
  onKeyDown = () => {},
  ref = null,
  ...props
}) => {
  
  // Define variant styles
  const variants = {
    primary: "bg-[#AE1F25] text-white border border-[#FFB752] rounded-full",
    outline: "border border-[#AE1F25] text-[#AE1F25] bg-white rounded-sm hover:bg-[#AE1F25] hover:text-white",
    cancel: "bg-[#E9E9E9] text-[#7A7A7A]"
  };
  

  const buttonStyle = {
    height: height,
    width: width,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  
//   const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer";

  const baseStyle = `cursor-pointer font-roboto text-${fontSize} box-border`
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className} `}
      style={buttonStyle}
      onKeyDown={onKeyDown}
      ref={ref}
      {...props}
    >
      {text}
    </button>
  );
};

export default CustomMainButton;