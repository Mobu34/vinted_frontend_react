import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import TitleForm from "../components/TitleForm";
import InputForm from "../components/InputForm";
import VintedButton from "../components/VintedButton";

const Signup = ({ connect }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        username,
        email,
        phone,
        password,
      });

      if (response.status === 200) {
        connect(response.data.token);
        history.push("/");
      }
    } catch (error) {}
  };

  return (
    <div className="signup-page">
      <div className="wrapper">
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <TitleForm title="S'inscrire" />
            <InputForm
              type="text"
              placeholder="Nom d'utilisateur"
              setState={setUsername}
            />
            <InputForm
              type="email"
              placeholder="Adresse mail"
              setState={setEmail}
            />
            <InputForm
              type="text"
              placeholder="Numéro de téléphone"
              setState={setPhone}
            />
            <InputForm
              type="password"
              placeholder="Mot de passe"
              setState={setPassword}
            />
            <InputForm
              type="password"
              placeholder="Confirmer mot de passe"
              setState={setConfirmPassword}
            />
            <VintedButton
              className="signup-button"
              text="S'inscrire"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
