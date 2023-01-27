import styles from "./inputForm.module.css";
import logo from "./img/logo.png";
import React, { useState } from "react";

export const InputForm = ({ addProduct }) => {
  const [givenProductName, setGivenProductName] = useState("");
  const [inputMode, setInputMode] = useState("add");
  const inputChangeHandler = (e) => {
    setGivenProductName(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.inputContainer}>
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Introduce productos a añadir"
          onChange={inputChangeHandler}
          value={givenProductName}
        />
        <button
          className={styles.addButton}
          onClick={() => {
            if (inputMode == "add") {
              addProduct(givenProductName, setGivenProductName);
            }
          }}
        >
          {inputMode == "add" ? "Añadir" : "Editar"}
        </button>
      </div>
    </div>
  );
};
