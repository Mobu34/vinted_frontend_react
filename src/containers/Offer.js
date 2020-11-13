import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MainOffer from "../components/MainOffer";

const Offer = ({}) => {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/offer?id=${id}`
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOffer();
  }, [setOffer, setIsLoading, id]);

  return (
    <div className="offer-page">
      {isLoading ? "Chargement en cours ..." : <MainOffer offer={offer} />}
    </div>
  );
};

export default Offer;
