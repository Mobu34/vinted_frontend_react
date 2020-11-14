import React from "react";
import { Link } from "react-router-dom";

const Sort = ({ text, value, setOpenFilters, setKeepSort, keepPage }) => {
  const handleClick = () => {
    setOpenFilters(false);
    setKeepSort(value);
  };
  return (
    <Link
      to={`/home/page_1/order_${value}`}
      className="sort-comp link"
      onClick={handleClick}
    >
      <label htmlFor={value}>{text}</label>
      <input type="radio" name="sort" value={value} />
    </Link>
  );
};

export default Sort;
