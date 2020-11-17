import React from "react";
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
              {/* <Link
                to="/publish"
                className="sell-button-link"
                onClick={() => {
                  !tokenCookie && handleLoginClick();
                }}
              > */}
              Vends tes articles
              {/* </Link> */}
            </button>
            {/* <Link
              to="/publish"
              className="sell-button"
              onClick={() => console.log("clicked")}
            >
              Vends tes articles
            </Link> */}
            {/* <VintedButton
              className="sell-button"
              text="Vends tes articles"
              token={token}
              setModalLogin={setModalLogin}
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
