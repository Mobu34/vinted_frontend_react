import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import MainOffer from "../components/MainOffer";

const Offer = ({
  isLoadingOffer,
  setIsLoadingOffer,
  selectedOffer,
  setSelectedOffer,
}) => {
  const { id } = useParams();

  const fetchOffer = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/offer?id=${id}`);
      setSelectedOffer(response.data);
      setIsLoadingOffer(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  return (
    <div className="offer-page">
      <Header />
      {isLoadingOffer ? (
        "Chargement en cours ..."
      ) : (
        <MainOffer selectedOffer={selectedOffer} />
      )}
    </div>
  );
};

export default Offer;
