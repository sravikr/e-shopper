import React from "react";

export const Input = ({
  className,
  inputType,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`form-control ${className}`}
    />
  );
};
