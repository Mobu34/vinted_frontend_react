import React from "react";
import { Link } from "react-router-dom";

const Sort = ({
  text,
  value,
  setOpenSortBy,
  setKeepSort,
  priceMin,
  priceMax,
}) => {
  const handleClick = () => {
    setOpenSortBy(false);
    setKeepSort(value);
  };
  return (
    <Link
      to={`/home/page_1/order_${value}/priceMin_${priceMin}/priceMax_${priceMax}`}
      className="sort-comp link"
      onClick={handleClick}
    >
      <label htmlFor={value}>{text}</label>
      <input type="radio" name="sort" value={value} />
    </Link>
  );
};

export default Sort;
