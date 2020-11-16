import React from "react";

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
        value={price}
      />
    </div>
  );
};

export default PriceFilter;
