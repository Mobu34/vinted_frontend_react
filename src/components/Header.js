import React from "react";

import VintedLogo from "../assets/img/VintedLogo.png";
import VintedButton from "./VintedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  searchInput,
  setSearchInput,
  setSearch,
  setModalLogin,
  token,
  setToken,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <header className="header-comp">
      <div className="wrapper">
        <div className="header-container">
          <div className="header-div1">
            <img src={VintedLogo} alt="vinted-logo" className="vinted-logo" />
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
              <VintedButton
                className="logout-button"
                text="Se déconnecter"
                setToken={setToken}
              />
            ) : (
              <>
                {/* <VintedButton className="sign-button" text="S'inscire" /> */}
                <VintedButton
                  className="sign-button"
                  text="Se connecter"
                  setModalLogin={setModalLogin}
                />
              </>
            )}

            <VintedButton className="sell-button" text="Vends tes articles" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
