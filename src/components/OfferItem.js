import React from "react";

const OfferItem = ({ offer }) => {
  return <div className="offer-item">{offer.product_name}</div>;
};

export default OfferItem;
