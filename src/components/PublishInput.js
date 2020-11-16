import React from "react";

const PublishInput = ({ name, text, placeholder, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="PublishInput">
      {name === "price" ? (
        <>
          <label htmlFor={name}>{text}</label>
          <div>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
            />{" "}
            <input type="checkbox" name="interested" />{" "}
            <label htmlFor="interested">
              Je suis intéressé(e) par les échanges
            </label>{" "}
          </div>
        </>
      ) : name === "description" ? (
        <>
          <label htmlFor={name}>Décris ton article</label>
          <textarea
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          ></textarea>
        </>
      ) : (
        <>
          <label htmlFor={name}>{text}</label>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default PublishInput;
