import React from "react";
import VintedButton from "./VintedButton";

const Form = ({ className }) => {
  return (
    <form className={className}>
      <h2>Se connecter</h2>
      <input type="text" placeholder="Nom d'utilisateur ou email" />
      <input type="password" placeholder="Mot de passe" />
      <VintedButton />
    </form>
  );
};

export default Form;
