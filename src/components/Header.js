import React from "react";

import VintedLogo from "../assets/img/VintedLogo.png";
import VintedButton from "./VintedButton";

const Header = () => {
  return (
    <header className="header-comp">
      <div className="wrapper">
        <div className="header-container">
          <div className="header-div1">
            <img src={VintedLogo} alt="vinted-logo" className="vinted-logo" />
            <input
              type="text"
              name="site-search"
              className="site-search"
              placeholder="Recherche des articles"
            />
          </div>
          <div className="header-div2">
            <VintedButton className="sign-button" text="S'inscire" />
            <VintedButton className="sign-button" text="Se connecter" />
            <VintedButton className="sell-button" text="Vends tes articles" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
