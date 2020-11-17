import React from "react";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";

import OfferDetail from "./OfferDetail";

const MainOffer = ({ offer, setModalLogin }) => {
  const token = Cookie.get("tokenCookie");
  const history = useHistory();

  const handleClick = () => {
    if (token) {
      history.push(`/payment/${offer._id}`);
    } else {
      setModalLogin(true);
      document.body.classList.add("modal-open");
    }
  };

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
            <button className="buy-button" onClick={handleClick}>
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOffer;
