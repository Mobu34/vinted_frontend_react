import React from "react";

const OfferItem = ({ index, offer }) => {
  return (
    <div className="offer-item">
      <div className="offer-item-user">{offer.owner.account.username}</div>
      <img
        src={offer.product_image.secure_url}
        alt={offer.product_name}
        className="offer-item-photo"
      />
      <div className="offer-item-details">
        <span>{offer.product_price} €</span>
        <span>{offer.product_details[1].TAILLE}</span>
        <span>{offer.product_details[0].MARQUE}</span>
      </div>
    </div>
  );
};

export default OfferItem;
