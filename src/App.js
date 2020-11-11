import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/offers");
      setOffers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <Router path="/offer">
          <Offer />
        </Router>
        <Route path="/">
          <Home isLoading={isLoading} offers={offers} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
