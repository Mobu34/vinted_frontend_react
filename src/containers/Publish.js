import React from "react";
import Cookie from "js-cookie";

import PublishInput from "../components/PublishInput";

const Publish = () => {
  //   console.log(Cookie.get("tokenCookie"));
  return (
    <div className="Publish">
      <div className="wrapper">
        <h1 className="Publish-title">Vends ton article</h1>
        <form className="Publish-form">
          <div className="Publish-file-container">
            <input type="file" />
          </div>
          <div className="Publish-title_desc-container">
            <PublishInput
              name="title"
              text="Titre"
              placeholder="ex: Chemise Sézane verte"
            />
            <div className="Publish-description">
              <label htmlFor="name">Décris ton article</label>
              <textarea
                name="description"
                placeholder="ex: porté quelques fois, taille correctement"
              ></textarea>
            </div>
          </div>
          <div className="Publish-details-container">
            <PublishInput name="brand" text="Marque" placeholder="ex: Zara" />
            <PublishInput
              name="size"
              text="Taille"
              placeholder="ex: L / 40 / 12"
            />
            <PublishInput
              name="color"
              text="Couleur"
              placeholder="ex: Fushia"
            />
            <PublishInput
              name="condition"
              text="État"
              placeholder="ex: Neuf avec étiquette"
            />
            <PublishInput name="location" text="Lieu" placeholder="ex: Paris" />
          </div>
          <div className="Publish-price-container">
            <PublishInput name="price" text="Prix" placeholder="0,00 €" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
