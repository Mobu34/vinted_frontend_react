import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookie from "js-cookie";

import Header from "./components/Header";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import Modal from "./components/Modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faSortDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faTimes, faSortDown, faBars);

const App = () => {
  const cookie = Cookie.get("tokenCookie");
  const [token, setToken] = useState(cookie || "");
  const [modalLogin, setModalLogin] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const connect = (tokenCookie) => {
    Cookie.set("tokenCookie", tokenCookie);
    setToken(tokenCookie);
  };

  return (
    <Router>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
        setModalLogin={setModalLogin}
        token={token}
        setToken={setToken}
      />
      <Switch>
        <Route exact path="/">
          <Home search={search} />
        </Route>
        <Route path="/home/:page/:order/:min/:max">
          <Home search={search} />
        </Route>
        <Route path="/offer/:id">
          <Offer setModalLogin={setModalLogin} />
        </Route>
        <Route path="/signup">
          <Signup connect={connect} />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route path="/payment/:id">
          <Payment />
        </Route>
      </Switch>
      {modalLogin && <Modal setModalLogin={setModalLogin} connect={connect} />}
    </Router>
  );
};

export default App;
