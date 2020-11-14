import React from "react";

const Page = ({ item, dash, slicedPage }) => {
  const pageNb = Number(slicedPage);

  return (
    <span className={pageNb === item ? "selected-page" : "page"}>{item}</span>
  );
};

export default Page;
