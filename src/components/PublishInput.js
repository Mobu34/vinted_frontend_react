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
          <div className="PublishInput-price">
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
            />{" "}
            <div>
              <input type="checkbox" name="interested" />{" "}
              <label htmlFor="interested">
                Je suis intéressé(e) par les échanges
              </label>{" "}
            </div>
          </div>
        </>
      ) : name === "description" ? (
        <>
          <label htmlFor={name}>Décris ton article</label>
          <textarea
            className="PublishInput-textarea"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          ></textarea>
        </>
      ) : (
        <>
          <label htmlFor={name}>{text}</label>
          <input
            className="PublishInput-input"
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
