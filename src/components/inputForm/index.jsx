import React, { useState } from "react";

export const InputForm = () => {
  const [input, setInput] = useState("");
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Introduce productos a añadir"
        onChange={inputChangeHandler}
      />
      <button onClick={null}>Añadir</button>
    </div>
  );
};
