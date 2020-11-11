import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MainHome from "../components/MainHome";

const Home = ({ isLoading, offers }) => {
  return (
    <div className="home-page">
      <Header />
      <MainHome isLoading={isLoading} offers={offers} />
    </div>
  );
};

export default Home;
