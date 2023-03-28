import React, { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const [inputTerm, setInputTerm] = useState("");

  const inputHandler = (event) => {
    setInputTerm(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(inputTerm);
    setInputTerm("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="term" onChange={inputHandler} value={inputTerm} />
      </form>
    </div>
  );
};

export default Searchbar;
