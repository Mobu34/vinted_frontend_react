import React, { useState, useEffect } from "react";
import axios from "axios";

import MainHome from "../components/MainHome";

const Home = ({}) => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/offers");
        setOffers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setOffers, setIsLoading]);

  return (
    <div className="home-page">
      <MainHome isLoading={isLoading} offers={offers} />
    </div>
  );
};

export default Home;
