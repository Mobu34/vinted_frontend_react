import React from "react";

const RedirectForm = ({ text, setModalLogin }) => {
  return (
    <span className="redirect-form" onClick={() => setModalLogin(false)}>
      {text}
    </span>
  );
};

export default RedirectForm;
