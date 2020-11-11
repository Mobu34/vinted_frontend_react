import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import MainHome from "../components/MainHome";

const Home = ({ isLoadingHome, setIsLoadingHome, offers, setOffers }) => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/offers");
      setOffers(response.data);
      setIsLoadingHome(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <MainHome isLoadingHome={isLoadingHome} offers={offers} />
    </div>
  );
};

export default Home;
