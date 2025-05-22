import React, { useState, forwardRef } from "react";
import eye from "../assets/Auth/eye.svg";
import eyeOff from "../assets/Auth/eyeOff.png";

const InputField = forwardRef(({
    variant = "grey",
    borderWidth = "0.5px",
    placeholder = "",
    className = "",
    height = "40px",
    width = "250px",
    type = "text",
    textColor = "#636363",
    fontSize = "14px",
    value,
    onChange,
    onKeyDown = () => {},
    id = null,
    labelName = null,
    compulsory = false,
    labelClassName = "",
    name,
    ...props
}, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const variants = {
        grey: "border-[#D8D8D8] border focus:border-black focus:outline-none",
        red: "border-[#AE1F25] border focus:border-red-500 focus:outline-none"
    };

    const borderStyle = {
        0.5: `border-[0.5px]`,
        1: `border-[1px]`,
        10: `border-[10px]`,
    };

    const baseStyle = `p-5 rounded-md font-inter font-semibold box-border shadow-[0_1px_2px_0_#1018280D]`

    const inputStyle = {
        height: height,
        width: width,
        color: textColor,
        fontSize: fontSize,
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const inputType = type === "password" ? (passwordVisible ? "text" : "password") : type;
    
    // Handle React Hook Form's register method input
    const handleChangeWithRegister = (e) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <>
            {labelName && <label htmlFor={id || name} className={`font-medium ${labelClassName}`}>{labelName}{compulsory && <span className='text-red-500'>*</span>}</label>}
            <div className="relative">
                <input
                    type={inputType}
                    style={inputStyle}
                    className={`${baseStyle} ${variants[variant]} ${className} ${type === "password" ? "pr-10" : ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChangeWithRegister}
                    onKeyDown={onKeyDown}
                    ref={ref}
                    id={id || name}
                    name={name}
                    {...props}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        aria-label={passwordVisible ? "Hide password" : "Show password"}
                    >
                        <img src={passwordVisible? eye: eyeOff} alt="Toggle password visibility" className="h-5 w-5"/>
                    </button>
                )}
            </div>
        </>
    );
});

InputField.displayName = 'InputField';
export default InputField;