import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { Redirect, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const token = Cookie.get("tokenCookie");

  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState({});
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-react.herokuapp.com/offer?id=${id}`
        );
        setOffer(response.data);
        setTotal(response.data.product_price + 1.2);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const stripePromise = loadStripe(
    "pk_test_51HoU8gDO3WpCsWUtsLvEkvYJkUxZd0b0CHcC68eWmEc4HW3f1QrJiAAOdIqdqtx56G9S25Kkia91YrDxu3kp4jqP00ZWoGGIEX"
  );

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  return token ? (
    <div className="Payment">
      <div className="Payment-container">
        {isLoading ? (
          "Chargement en cours"
        ) : completed ? (
          <span>Paiement effectué</span>
        ) : (
          <>
            <div className="Payment-summary_details-container">
              <div className="Payment-summary">Résumé de la commande</div>
              <div className="Payment-details-container">
                <div className="Payment-details-order-container">
                  <span>Commande</span>
                  <span>{offer.product_price.toFixed(2)} €</span>
                </div>
                <div className="Payment-details-protection-container">
                  <span>Frais protection acheteurs</span>
                  <span>0.40 €</span>
                </div>
                <div className="Payment-details-charge-container">
                  <span>Frais de port</span>
                  <span>0.80 €</span>
                </div>
              </div>
            </div>
            <div className="Payment-total_totaltext-container">
              <div className="Payment-total-container">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <p>
                Il ne vous reste plus qu'une étape pour vous offrir{" "}
                {offer.product_name}. Vous allez payer {total.toFixed(2)} €
                (frais de protection et frais de port inclus).
              </p>
            </div>
            <Elements stripe={stripePromise}>
              <label htmlFor="name">Nom du détenteur de la carte</label>
              <input type="text" id="name" onChange={handleChange} />
              <CheckoutForm
                setCompleted={setCompleted}
                offer={offer}
                fullName={fullName}
              />
            </Elements>
          </>
        )}
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Payment;
