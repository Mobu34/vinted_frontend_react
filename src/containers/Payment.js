import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import Loader from "react-loader-spinner";

import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const token = Cookie.get("tokenCookie");
  const history = useHistory();

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

  const redirectionHomepage = () => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  };
  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  return token ? (
    <div className="Payment">
      <div
        className={
          isLoading ? "isLoading-Payment-container" : "Payment-container"
        }
      >
        {isLoading ? (
          <Loader type="Rings" color="#2db1bb" height={100} width={100} />
        ) : completed ? (
          <span onClick={redirectionHomepage()}>
            Paiement effectué, vous allez être redirigé vers la page
            d'accueil...
          </span>
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
            <div className="Payment-cardholder-container">
              <div className="Payment-cardholder-label_input-container">
                <label htmlFor="name" className="Payment-cardholder-label">
                  Nom du détenteur de la carte
                </label>
                <input
                  type="text"
                  id="name"
                  className="Payment-cardholder-input"
                  onChange={handleChange}
                  placeholder="ex: Jean Dupont"
                />
              </div>
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  setCompleted={setCompleted}
                  offer={offer}
                  fullName={fullName}
                  setIsLoading={setIsLoading}
                />
              </Elements>
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Payment;
