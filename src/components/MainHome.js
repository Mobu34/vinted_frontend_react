import React from "react";
import { Link } from "react-router-dom";

import VintedButton from "./VintedButton";
import OfferItem from "./OfferItem";

const MainHome = ({ isLoading, offers }) => {
  console.log(offers);
  return (
    <main className="main-home-comp">
      <div className="wrapper">
        {/* MainHome Banner */}
        <div className="main-home-banner">
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
        {/* MainHome Offers */}
        <div className="offer-list">
          {isLoading
            ? "En cours de chargement ..."
            : offers.offers.map((offer, index) => {
                return (
                  <Link
                    to={`/offer/${offer._id}`}
                    key={index}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <OfferItem index={index} offer={offer} />
                  </Link>
                );
              })}
        </div>
      </div>
    </main>
  );
};

export default MainHome;
