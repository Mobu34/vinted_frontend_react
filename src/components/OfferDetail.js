import React from "react";

const OfferDetail = ({ detailKey, detailValue }) => {
  console.log("key =", detailKey);
  console.log("value =", detailValue);
  return (
    <div className="offer-detail-comp">
      <span className="offer-detail-key">{detailKey}</span>
      <span className="offer-detail-value">{detailValue.toUpperCase()}</span>
    </div>
  );
};

export default OfferDetail;
