import React, { useState, useCallback } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import PublishInput from "../components/PublishInput";

const Publish = () => {
  const [picture, setPicture] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);

  const token = Cookie.get("tokenCookie");

  const history = useHistory();

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
    const objURL = URL.createObjectURL(acceptedFiles[0]);
    setPicture(objURL);
    setIsDragActive(!isDragActive);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const formData = new FormData();
  formData.append("photo", file);
  formData.append("product_name", title);
  formData.append("product_description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", location);
  formData.append("product_price", price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-react.herokuapp.com/offer/publish",
        formData,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        alert(
          "L'offre a bien été ajouté, vous allez être redirigé vers cette nouvelle offre."
        );
        history.push(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   console.log(e.target.files);
  //   setFile(e.target.files[0]);
  // };
  // console.log(file);

  return (
    <div className="Publish">
      <div className="wrapper">
        <h1 className="Publish-title">Vends ton article</h1>
        <form onSubmit={handleSubmit} className="Publish-form">
          <div className="Publish-file-container">
            <div className="Publish-file-subcontainer">
              {/* <div className="test">
                <label htmlFor="photo" className="Publish-file-label">
                  Ajoute une photo
                </label>
                <input
                  multiple={true}
                  name="photo"
                  type="file"
                  onChange={handleChange}
                  className="Publish-file"
                  onMouseUp={(e) => console.log("UP")}
                />
              </div> */}
              {isDragActive ? (
                <div className="Publish-img-container">
                  <img
                    src={picture}
                    alt={picture.name}
                    className="Publish-img"
                  />
                  <span
                    className="Publish-img-delete"
                    onClick={() => setIsDragActive(!isDragActive)}
                  >
                    X
                  </span>
                </div>
              ) : (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="Publish-file-label">Ajoute une photo</p>
                </div>
              )}
            </div>
          </div>
          <div className="Publish-title_desc-container">
            <PublishInput
              name="title"
              text="Titre"
              placeholder="ex: Chemise Sézane verte"
              state={title}
              setState={setTitle}
            />
            <PublishInput
              name="description"
              text="Décris ton article"
              placeholder="ex: porté quelques fois, taille correctement"
              state={description}
              setState={setDescription}
            />
          </div>
          <div className="Publish-details-container">
            <PublishInput
              name="brand"
              text="Marque"
              placeholder="ex: Zara"
              state={brand}
              setState={setBrand}
            />
            <PublishInput
              name="size"
              text="Taille"
              placeholder="ex: L / 40 / 12"
              state={size}
              setState={setSize}
            />
            <PublishInput
              name="color"
              text="Couleur"
              placeholder="ex: Fushia"
              state={color}
              setState={setColor}
            />
            <PublishInput
              name="condition"
              text="État"
              placeholder="ex: Neuf avec étiquette"
              state={condition}
              setState={setCondition}
            />
            <PublishInput
              name="location"
              text="Lieu"
              placeholder="ex: Paris"
              state={location}
              setState={setLocation}
            />
          </div>
          <div className="Publish-price-container">
            <PublishInput
              name="price"
              text="Prix"
              placeholder="0,00 €"
              state={price}
              setState={setPrice}
            />
          </div>
          <div className="Publish-submit">
            <button type="submit"> Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
