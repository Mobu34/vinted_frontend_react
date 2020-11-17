import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import TitleForm from "../components/TitleForm";
import InputForm from "../components/InputForm";

const Signup = ({ connect }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password && confirmPassword) {
      try {
        const response = await axios.post(
          "https://vinted-react.herokuapp.com/user/signup",
          {
            username,
            email,
            phone,
            password,
          }
        );

        if (response.status === 200) {
          connect(response.data.token);
          history.push("/");
        }
      } catch (error) {}
    } else {
      alert("Les mots de passe ne sont pas identiques");
    }
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
            <button className="signup-button" type="submit">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
