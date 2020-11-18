import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import MainOffer from "../components/MainOffer";

const Offer = ({ setModalLogin }) => {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(
          `https://vinted-react.herokuapp.com/offer?id=${id}`
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
    <div className={isLoading ? "offer-page" : ""}>
      {isLoading ? (
        <Loader type="Rings" color="#2db1bb" height={100} width={100} />
      ) : (
        <MainOffer offer={offer} setModalLogin={setModalLogin} />
      )}
    </div>
  );
};

export default Offer;
