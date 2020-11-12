import React from "react";
import Cookie from "js-cookie";

const VintedButton = ({ className, text, setModalLogin, setToken, type }) => {
  const handleClick = () => {
    if (setModalLogin) {
      setModalLogin(true);
      document.body.classList.add("modal-open");
    } else if (setToken) {
      Cookie.remove("tokenCookie");
      setToken("");
    }
  };
  return (
    <button
      className={className}
      onClick={handleClick}
      type={type ? type : null}
    >
      {text}
    </button>
  );
};

export default VintedButton;
