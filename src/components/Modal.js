import React, { useState } from "react";
import axios from "axios";

import TitleForm from "./TitleForm";
import InputForm from "./InputForm";
import VintedButton from "./VintedButton";
import RedirectFrom from "./RedirectForm";

const Modal = ({ setModalLogin, connect }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = new RegExp("@", "i");
    let loginType = regex.test(login) ? "email" : "username";

    const response = await axios.post("http://localhost:3001/user/login", {
      [loginType]: login,
      password: password,
    });

    connect(response.data);
    setModalLogin(false);
  };

  return (
    <div className="modal">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <RedirectFrom text="Pas encore de compte ? Inscris-toi !" />
      </form>
    </div>
  );
};

export default Modal;
