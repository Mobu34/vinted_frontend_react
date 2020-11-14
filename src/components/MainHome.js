import React, { useState } from "react";
import { Link } from "react-router-dom";

import VintedButton from "./VintedButton";
import Sort from "./Sort";
import OfferItem from "./OfferItem";
import Page from "./Page";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tear from "../assets/img/tear.svg";

const MainHome = ({ isLoading, offers, pages, slicedPage }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [keepPage, setKeepPage] = useState(1);
  const [keepSort, setKeepSort] = useState("");

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
        <div className="filter-container">
          <div className="result">
            {offers.count ? offers.count : "..."} résultats
          </div>
          <div className="sort-container">
            <span
              className="sort-by"
              onClick={() => setOpenFilters(!openFilters)}
            >
              Trier par
            </span>
            <FontAwesomeIcon icon="sort-down" />
            <div className="sort">
              {openFilters && (
                <>
                  <Sort
                    text="Croissant"
                    value="asc"
                    setOpenFilters={setOpenFilters}
                    setKeepSort={setKeepSort}
                    keepPage={keepPage}
                  />
                  <Sort
                    text="Décroissant"
                    value="desc"
                    setOpenFilters={setOpenFilters}
                    setKeepSort={setKeepSort}
                    keepPage={keepPage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
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
            return (
              <Link
                to={`/home/page_${item}/${
                  !keepSort ? "recents" : `order_${keepSort}`
                }`}
                key={index}
                className="link"
                onClick={() => setKeepPage(item)}
              >
                <Page
                  item={item}
                  dash={pages.length - 1 !== index && "-"}
                  slicedPage={slicedPage}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MainHome;
