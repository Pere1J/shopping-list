import React, { useState } from "react";

export const InputForm = ({ addProduct }) => {
  const [givenProductName, setGivenProductName] = useState("");
  const [inputMode, setInputMode] = useState("add");
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
          if (inputMode == "add") {
            addProduct(givenProductName);
          }
        }}
      >
        {inputMode == "add" ? "Añadir" : "Editar"}
      </button>
    </div>
  );
};
