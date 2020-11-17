import React from "react";
import Cookie from "js-cookie";
import { Link, Redirect } from "react-router-dom";

const VintedButton = ({
  className,
  text,
  setModalLogin,
  setToken,
  type,
  token,
  id,
}) => {
  const tokenCookie = Cookie.get("tokenCookie");

  const handleClick = () => {
    if (text === "Se connecter") {
      setModalLogin(true);
      document.body.classList.add("modal-open");
    } else if (text === "Se déconnecter") {
      Cookie.remove("tokenCookie");
      setToken("");
    } else if (text === "Vends tes articles" && !token) {
      setModalLogin(true);
      document.body.classList.add("modal-open");
    } else if (text === "Acheter" && tokenCookie) {
      console.log(id);
      console.log(tokenCookie);
      console.log(text);
    } else if (text === "Acheter") {
      setModalLogin(true);
      document.body.classList.add("modal-open");
    }
  };
  return (
    <button
      className={className}
      onClick={handleClick}
      type={type ? type : null}
    >
      {text === "Vends tes articles" && token ? (
        <Link to="/publish" className="link">
          {text}
        </Link>
      ) : text === "Acheter" && tokenCookie ? (
        <Link to={`/payment/${id}`} className="link">
          {text}
        </Link>
      ) : (
        text
      )}
    </button>
  );
};

export default VintedButton;
