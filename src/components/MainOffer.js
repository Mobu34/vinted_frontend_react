import React from "react";

import VintedButton from "./VintedButton";
import OfferDetail from "./OfferDetail";

const MainOffer = ({ offer }) => {
  return (
    <div className="main-offer-comp">
      <div className="wrapper">
        <div className="main-offer-container">
          <img
            src={offer.product_image.secure_url}
            alt={offer.product_name}
            className="main-offer-img"
          />
          <div className="main-offer-details-container">
            <div className="main-offer-details-subcontainer">
              <span className="main-offer-price">{offer.product_price} €</span>
              <div className="main-offer-details">
                {offer.product_details.map((item, index) => {
                  return (
                    <OfferDetail
                      key={index}
                      detailKey={Object.keys(item)}
                      detailValue={item[Object.keys(item)]}
                    />
                  );
                })}
              </div>
            </div>
            <div className="main-offer-description-container">
              <strong>{offer.product_details[0].MARQUE}</strong>
              <p>{offer.product_description}</p>
              <span>{offer.owner.account.username}</span>
            </div>
            <VintedButton className="buy-button" text="Acheter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOffer;
