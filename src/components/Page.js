import React from "react";

const Page = ({ item, setPages, page, setPage, dash, space }) => {
  const handleClick = () => {
    if (page !== item) {
      setPage(item);
      setPages([]);
    }
  };
  return (
    <span className="page" onClick={handleClick}>
      {item} {dash}
    </span>
  );
};

export default Page;
