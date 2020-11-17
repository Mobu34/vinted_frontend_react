import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";

import TitleForm from "./TitleForm";
import InputForm from "./InputForm";
import RedirectForm from "./RedirectForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ setModalLogin, connect }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();
  const splittedLocation = location.pathname.split("/");

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
        console.log(location);
        connect(response.data);
        setModalLogin(false);
        document.body.classList.remove("modal-open");
        if (splittedLocation[1] === "offer") {
          history.push(`/payment/${splittedLocation[2]}`);
        } else {
          history.push("/");
        }
      }
    } catch (error) {
      alert("Incorrect");
    }
  };

  const handleCloseClick = () => {
    setModalLogin(false);
    document.body.classList.remove("modal-open");
  };

  const handleClick = () => {
    // console.log(location);
    // if (splittedLocation[1] === "offer") {
    //   console.log(`/payment/${splittedLocation[2]}`);
    //   history.push(location.pathname);
    // } else {
    //   console.log("publish");
    //   history.push("/publish");
    // }
  };

  return (
    <div className="modal">
      <form className="login-form" onSubmit={handleSubmit}>
        <FontAwesomeIcon
          icon="times"
          className="close-modal"
          onClick={handleCloseClick}
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
        <button
          type="submit"
          className="login-button"
          onClick={() => {
            handleClick();
          }}
        >
          {/* <Link
            to="/payment/ezfzfzfzefz"
            // to={
            //   splittedLocation[1] === "offer"
            //     ? `/payment/${splittedLocation[2]}`
            //     : "/publish"
            // }
          > */}
          Se connecter
          {/* </Link> */}
        </button>
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
