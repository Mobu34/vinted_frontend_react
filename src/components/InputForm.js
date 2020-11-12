import React from "react";

const InputForm = ({ type, placeholder, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <input
      type={type}
      className="input-form"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputForm;
