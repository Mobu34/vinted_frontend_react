import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ setCompleted, fullName, offer }) => {
  const stripe = useStripe(),
    elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // on récupère ici les données bancaires que l'user rentre
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: fullName,
        currency: "eur",
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://vinted-react.herokuapp.com/offer/payment",
        {
          stripeToken,
          amount: offer.product_price,
          description: offer.product_description,
          id: offer._id,
        }
      );

      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="CheckoutForm">
      <CardElement />
      <div className="CheckoutForm-submit-btn-container">
        {" "}
        <button type="submit" className="CheckoutForm-submit-btn">
          Valider
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
