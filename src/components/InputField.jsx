import React, { useState } from "react";
import eye from "../assets/Auth/eye.svg";
import eyeOff from "../assets/Auth/eyeOff.png";

const InputField = ({
    variant = "grey",
    borderWidth = "0.5px",
    placeholder = "",
    className = "",
    height = "40px",
    width = "250px",
    type = "text",
    textColor = "#636363",
    fontSize = "14px",
    value = "",
    onChange = () => {},
    onKeyDown = () => {},
    ref = null,
    id = null,
    labelName = null,
    compulsory = false,
    labelClassName = "",
    ...props
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const variants = {
        grey: "border-[#D8D8D8] border",
        red: "border-[#AE1F25] border"
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

    return (
        <>
            {labelName && <label htmlFor={id} className={`font-medium ${labelClassName}`}>{labelName}{compulsory && <span className='text-red-500'>*</span>}</label>}
            <div className="relative">
                <input
                    type={inputType}
                    style={inputStyle}
                    className={`${baseStyle} ${variants[variant]} ${className} ${type === "password" ? "pr-10" : ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    ref={ref}
                    {...props}
                    id={id}
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
}

export default InputField;