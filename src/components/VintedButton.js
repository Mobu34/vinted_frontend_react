import React from "react";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";

const VintedButton = ({
  className,
  text,
  setModalLogin,
  setToken,
  type,
  token,
}) => {
  const handleClick = () => {
    if (setModalLogin && !token) {
      setModalLogin(true);
      document.body.classList.add("modal-open");
    } else if (setToken) {
      Cookie.remove("tokenCookie");
      setToken("");
    } else if (!token && !type) {
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
      {token ? (
        <Link to="/publish" className="link">
          {text}
        </Link>
      ) : (
        text
      )}
    </button>
  );
};

export default VintedButton;
