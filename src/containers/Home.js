import React, { useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import MainHome from "../components/MainHome";

const Home = ({
  isLoadingHome,
  setIsLoadingHome,
  offers,
  setOffers,
  setSelectedOffer,
  setIsLoadingOffer,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinted-react.herokuapp.com/offers"
        );
        setOffers(response.data);
        setIsLoadingHome(false);
        setSelectedOffer({});
        setIsLoadingOffer(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setOffers, setIsLoadingHome]);

  return (
    <div className="home-page">
      <Header />
      <MainHome isLoadingHome={isLoadingHome} offers={offers} />
    </div>
  );
};

export default Home;
