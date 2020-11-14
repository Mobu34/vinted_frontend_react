import React from "react";
import { Link } from "react-router-dom";

const PriceFilter = ({ name, label, price, setPrice }) => {
  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div className="price-filter-comp">
      <label className="price-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="price-input"
        type="text"
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default PriceFilter;
