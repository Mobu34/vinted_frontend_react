import React, { useState } from "react";
import { Link } from "react-router-dom";

import VintedButton from "./VintedButton";
import PriceFilter from "./PriceFilter";
import Sort from "./Sort";
import OfferItem from "./OfferItem";
import Page from "./Page";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tear from "../assets/img/tear.svg";

const MainHome = ({ isLoading, offers, pages, slicedPage }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(10000);
  const [openSortBy, setOpenSortBy] = useState(false);
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
          <div className="filters">
            <div
              className="price-filter"
              onClick={() => setOpenFilters(!openFilters)}
            >
              Prix <FontAwesomeIcon icon="sort-down" />
            </div>
            <div className="price">
              {openFilters && (
                <>
                  <PriceFilter
                    name="priceMin"
                    label="De"
                    price={priceMin}
                    setPrice={setPriceMin}
                  />
                  <PriceFilter
                    name="priceMax"
                    label="À"
                    price={priceMax}
                    setPrice={setPriceMax}
                  />
                  <Link
                    to={`/home/page_1/${
                      !keepSort ? "recents" : `order_${keepSort}`
                    }/priceMin_${priceMin}/priceMax_${priceMax}`}
                    onClick={() => setOpenFilters(!openFilters)}
                  >
                    <VintedButton
                      className="price-submit"
                      text="OK"
                      type="submit"
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="sort-container">
            <span
              className="sort-by"
              onClick={() => setOpenSortBy(!openSortBy)}
            >
              Trier par
            </span>
            <FontAwesomeIcon icon="sort-down" />
            <div className="sort">
              {openSortBy && (
                <>
                  <Sort
                    text="Croissant"
                    value="asc"
                    setOpenSortBy={setOpenSortBy}
                    setKeepSort={setKeepSort}
                    keepPage={keepPage}
                    priceMin={priceMin}
                    priceMax={priceMax}
                  />
                  <Sort
                    text="Décroissant"
                    value="desc"
                    setOpenSortBy={setOpenSortBy}
                    setKeepSort={setKeepSort}
                    keepPage={keepPage}
                    priceMin={priceMin}
                    priceMax={priceMax}
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
                }/priceMin_${priceMin}/priceMax_${priceMax}`}
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
