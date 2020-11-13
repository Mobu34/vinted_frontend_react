import React from "react";

const Page = ({ item, dash }) => {
  return (
    <span className="page">
      {item} {dash}
    </span>
  );
};

export default Page;
