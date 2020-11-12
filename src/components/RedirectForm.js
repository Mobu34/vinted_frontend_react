import React from "react";

const RedirectForm = ({ text, setModalLogin }) => {
  const handleClick = () => {
    setModalLogin(false);
    document.body.classList.remove("modal-open");
  };
  return (
    <span className="redirect-form" onClick={handleClick}>
      {text}
    </span>
  );
};

export default RedirectForm;
