import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";

import TitleForm from "./TitleForm";
import InputForm from "./InputForm";
import VintedButton from "./VintedButton";
import RedirectForm from "./RedirectForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ setModalLogin, connect }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = new RegExp("@", "i");
    let loginType = regex.test(login) ? "email" : "username";

    try {
      const response = await axios.post(
        "https://vinted-react.herokuapp.com/user/login",
        {
          [loginType]: login,
          password: password,
        }
      );

      if (response.status === 200) {
        connect(response.data);
        setModalLogin(false);
        document.body.classList.remove("modal-open");
      }
    } catch (error) {
      alert("Incorrect");
    }
  };

  const handleClick = () => {
    setModalLogin(false);
    document.body.classList.remove("modal-open");
    console.log("handleClick");
    history.push("/payment/test");
  };

  return (
    <div className="modal">
      <form className="login-form" onSubmit={handleSubmit}>
        <FontAwesomeIcon
          icon="times"
          className="close-modal"
          onClick={handleClick}
        />
        <TitleForm title="Se connecter" />
        <InputForm
          type="text"
          placeholder="Nom d'utilisateur ou adresse mail"
          setState={setLogin}
        />
        <InputForm
          type="password"
          placeholder="Mot de passe"
          setState={setPassword}
        />
        <VintedButton
          text="Se connecter"
          className="login-button"
          type="submit"
        />
        <Link to="/signup" className="link">
          <RedirectForm
            text="Pas encore de compte ? Inscris-toi !"
            setModalLogin={setModalLogin}
          />
        </Link>
      </form>
    </div>
  );
};

export default Modal;
