import styles from "./inputForm.module.css";
import React, { useState } from "react";

export const InputForm = ({ addProduct }) => {
  const [givenProductName, setGivenProductName] = useState("");
  const [inputMode, setInputMode] = useState("add");
  const inputChangeHandler = (e) => {
    setGivenProductName(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <input
        className={styles.inputForm}
        type="text"
        placeholder="Introduce productos a añadir"
        onChange={inputChangeHandler}
      />
      <button
        className={styles.addButton}
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
