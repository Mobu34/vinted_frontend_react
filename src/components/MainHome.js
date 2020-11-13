import React from "react";
import { Link } from "react-router-dom";

import VintedButton from "./VintedButton";
import OfferItem from "./OfferItem";
import Page from "./Page";

import tear from "../assets/img/tear.svg";

const MainHome = ({ isLoading, offers, pages }) => {
  return (
    <main className="main-home-comp">
      <img
        src="https://images.vinted.net/thumbs/2560x1441/01_02445_h4cWoccP4qQVVwScboeLTTE1.jpeg?1597418184-7a15687babec3eb1b2bfc88a47c8cb31f2827caa"
        alt="Vends sur Vinted"
        className="banner-img"
      />
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
        <img src={tear} alt="" className="tear-img" />
        {/* MainHome Offers */}
        <div className="offer-list">
          {isLoading
            ? "En cours de chargement ..."
            : offers.offers.map((offer, index) => {
                return (
                  <Link to={`/offer/${offer._id}`} key={index} className="link">
                    <OfferItem index={index} offer={offer} />
                  </Link>
                );
              })}
        </div>
        <div className="page-container">
          {pages.map((item, index) => {
            console.log(item);
            return (
              <Link to={`/home/page${item}`} key={index} className="link">
                <Page item={item} dash={pages.length - 1 !== index && "-"} />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MainHome;
