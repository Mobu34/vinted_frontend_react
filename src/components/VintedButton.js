import React from "react";

const VintedButton = ({ className, text, setModalLogin, type }) => {
  const handleClick = () => {
    if (setModalLogin) {
      setModalLogin(true);
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
