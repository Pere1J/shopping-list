import React, { useState } from "react";

export const InputForm = ({ addProduct }) => {
  const [givenProductName, setGivenProductName] = useState("");
  const inputChangeHandler = (e) => {
    setGivenProductName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Introduce productos a añadir"
        onChange={inputChangeHandler}
      />
      <button
        onClick={() => {
          addProduct(givenProductName);
        }}
      >
        Añadir
      </button>
    </div>
  );
};
