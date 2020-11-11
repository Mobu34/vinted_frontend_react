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
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(
          `https://vinted-react.herokuapp.com/offer?id=${id}`
        );
        setSelectedOffer(response.data);
        setIsLoadingOffer(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOffer();
  }, [setSelectedOffer, setIsLoadingOffer, id]);

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
