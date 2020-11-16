import React from "react";

const PublishInput = ({ name, text, placeholder }) => {
  return (
    <div className="PublishInput">
      {name === "price" ? (
        <>
          <label htmlFor={name}>{text}</label>
          <div>
            <input type="text" name={name} placeholder={placeholder} />{" "}
            <input type="checkbox" name="interested" />{" "}
            <label htmlFor="interested">
              Je suis intéressé(e) par les échanges
            </label>{" "}
          </div>
        </>
      ) : (
        <>
          <label htmlFor={name}>{text}</label>
          <input type="text" name={name} placeholder={placeholder} />
        </>
      )}
    </div>
  );
};

export default PublishInput;
