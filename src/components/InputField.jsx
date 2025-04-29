import React from "react";

const InputField = ({
    variant = "grey",
    borderWidth = "0.5px",
    placeholder = "",
    className = "",
    height = "40px",
    width = "250px",
    type = "text",
    textColor = "#B6B6B6",
    fontSize = "14px",
    value = "",
    onChange = () => {},
    onKeyDown = () => {},
    ref = null,
}) => {

    const variants = {
        grey: "border-[#939393] border",
        red: "border-[#AE1F25] border"
    };

    const borderStyle = {
        0.5: `border-[0.5px]`,
        1: `border-[1px]`,
        10: `border-[10px]`,
    };

    const baseStyle = `p-5 rounded-md font-inter font-semibold box-border`


    const inputStyle = {
        border: `${borderWidth} solid`,
        height: height,
        width: width,
        color: textColor,
        fontSize: fontSize,
    };

    return (
        <input
            type = {type}
            style={inputStyle}
            className={`${baseStyle} ${variants[variant]} ${className} ${borderStyle[borderWidth]}`}
            placeholder = {placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={ref}
        />
    );
}

export default InputField;