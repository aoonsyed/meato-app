import React from 'react'

const RoundedDiv = ({
    height = "42px",
    width = "257px",
    className = "",
    borderRadius = "28px",
    children,
    ...props
}) => 
    {
    
    const baseStyle = `bg-white font-inter shadow-[0_4px_44px_0px_#00000040]`

  return (

      
    <div className={`${baseStyle} ${className}`}
    style={{
        height,
        width,
        borderRadius,
    }}
    {...props}
    >
        {children}
    </div>
  )
}

export default RoundedDiv