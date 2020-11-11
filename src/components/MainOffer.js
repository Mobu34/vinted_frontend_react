import React from "react";

import VintedButton from "./VintedButton";
import OfferDetail from "./OfferDetail";

const MainOffer = ({ selectedOffer }) => {
  return (
    <div className="main-offer-comp">
      <div className="wrapper">
        <div className="main-offer-container">
          <img
            src={selectedOffer.product_image.secure_url}
            alt={selectedOffer.product_name}
            className="main-offer-img"
          />
          <div className="main-offer-details-container">
            <div className="main-offer-details-subcontainer">
              <span className="main-offer-price">
                {selectedOffer.product_price} €
              </span>
              <div className="main-offer-details">
                {selectedOffer.product_details.map((item, index) => {
                  return (
                    <OfferDetail
                      detailKey={Object.keys(item)}
                      detailValue={item[Object.keys(item)]}
                    />
                  );
                })}
              </div>
            </div>
            <div className="main-offer-description-container">
              <strong>{selectedOffer.product_details[0].MARQUE}</strong>
              <p>{selectedOffer.product_description}</p>
              <span>{selectedOffer.owner.account.username}</span>
            </div>
            <VintedButton className="buy-button" text="Acheter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOffer;
