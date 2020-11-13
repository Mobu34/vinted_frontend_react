import React from "react";

const Page = ({ item, dash, slicedPage }) => {
  if (slicedPage == item) {
    console.log("yes", slicedPage);
  }

  return (
    <span className={slicedPage == item ? "selected-page" : "page"}>
      {item} {dash}
    </span>
  );
};

export default Page;
