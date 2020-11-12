import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookie from "js-cookie";

import Header from "./components/Header";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Modal from "./components/Modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const App = () => {
  const cookie = Cookie.get("tokenCookie");
  const [token, setToken] = useState(cookie || "");
  const [modalLogin, setModalLogin] = useState(false);

  const connect = (tokenCookie) => {
    Cookie.set("tokenCookie", tokenCookie);
    setToken(tokenCookie);
  };

  return (
    <Router>
      <Header setModalLogin={setModalLogin} token={token} setToken={setToken} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup connect={connect} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {modalLogin && <Modal setModalLogin={setModalLogin} connect={connect} />}
    </Router>
  );
};

export default App;
