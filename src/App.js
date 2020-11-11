import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Offer from "./containers/Offer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const App = () => {
  const [isLoadingHome, setIsLoadingHome] = useState(true);
  const [isLoadingOffer, setIsLoadingOffer] = useState(true);
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState({});
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offer
            isLoadingOffer={isLoadingOffer}
            setIsLoadingOffer={setIsLoadingOffer}
            selectedOffer={selectedOffer}
            setSelectedOffer={setSelectedOffer}
          />
        </Route>
        <Route path="/">
          <Home
            isLoadingHome={isLoadingHome}
            setIsLoadingHome={setIsLoadingHome}
            offers={offers}
            setOffers={setOffers}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
