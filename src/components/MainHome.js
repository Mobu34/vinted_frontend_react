import React from "react";

import VintedButton from "./VintedButton";
import OfferItem from "./OfferItem";

const MainHome = ({ isLoading, offers }) => {
  console.log(offers);
  return (
    <main className="main-home-comp">
      <div className="wrapper">
        <div className="main-home-container">
          <div className="start-sell-container">
            <h2 className="start-sell-title">
              Prêts à faire du tri dans vos placards ?
            </h2>
            <VintedButton
              className="start-sell-button"
              text="Commencer à vendre"
            />
          </div>
        </div>
        <div className="main-offer-list">
          {isLoading
            ? "En cours de chargement ..."
            : offers.offers.map((offer, index) => {
                return (
                  <OfferItem key={offer._id} index={index} offer={offer} />
                );
              })}
        </div>
      </div>
    </main>
  );
};

export default MainHome;
