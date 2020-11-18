import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookie from "js-cookie";

import VintedLogo from "../assets/img/VintedLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  searchInput,
  setSearchInput,
  setSearch,
  setModalLogin,
  token,
  setToken,
}) => {
  const tokenCookie = Cookie.get("tokenCookie");
  const history = useHistory();

  const [isHamburgerMenuDisplayed, setIsHamburgerMenuDisplayed] = useState(
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleLogoutClick = () => {
    Cookie.remove("tokenCookie");
    setToken("");
    history.push("/");
  };
  const handleLoginClick = () => {
    setModalLogin(true);
    document.body.classList.add("modal-open");
  };
  const handlePublishClick = () => {
    history.push("/publish");
  };
  const handleHamburgerMenuClick = (text) => {
    if (isHamburgerMenuDisplayed) {
      setIsHamburgerMenuDisplayed(false);
      if (text === "Se déconnecter") {
        handleLogoutClick();
      } else if (text === "Se connecter") {
        handleLoginClick();
      } else if (text === "Vends tes articles") {
        !tokenCookie ? handleLoginClick() : handlePublishClick();
      }
    } else {
      setIsHamburgerMenuDisplayed(true);
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && isHamburgerMenuDisplayed) {
      setIsHamburgerMenuDisplayed(false);
    }
  });

  return (
    <header className="header-comp">
      <div className="wrapper">
        <div className="header-container">
          <div className="header-div1">
            <Link to="/">
              <img src={VintedLogo} alt="vinted-logo" className="vinted-logo" />
            </Link>
            <div className="search-container">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="site-search"
                  className="site-search"
                  placeholder="Recherche des articles"
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon="search" className="search-icon" />
              </form>
            </div>
          </div>
          <div className="header-div2">
            {token ? (
              <button className="logout-button" onClick={handleLogoutClick}>
                Se déconnecter
              </button>
            ) : (
              <button className="sign-button" onClick={handleLoginClick}>
                Se connecter
              </button>
            )}
            <button
              className="sell-button"
              onClick={() => {
                !tokenCookie ? handleLoginClick() : handlePublishClick();
              }}
            >
              Vends tes articles
            </button>
            <div
              className="hamburger-menu-btn"
              onClick={handleHamburgerMenuClick}
            >
              <FontAwesomeIcon icon="bars" />
            </div>
          </div>
        </div>
      </div>
      {isHamburgerMenuDisplayed && (
        <div className="hamburger-menu-container">
          {token ? (
            <div className="hamburger-menu-logout-btn-container">
              <div
                className="hamburger-menu-logout-btn"
                onClick={() => handleHamburgerMenuClick("Se déconnecter")}
              >
                Se déconnecter
              </div>
            </div>
          ) : (
            <div className="hamburger-menu-login-btn-container">
              <div
                className="hamburger-menu-login-btn"
                onClick={() => handleHamburgerMenuClick("Se connecter")}
              >
                Se connecter
              </div>
            </div>
          )}
          <div className="hamburger-menu-sell-btn-container">
            <div
              className="hamburger-menu-sell-btn"
              onClick={() => handleHamburgerMenuClick("Vends tes articles")}
            >
              Vends tes articles
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
