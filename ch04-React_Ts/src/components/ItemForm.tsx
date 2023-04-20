import React, { useRef } from "react";
import { ItemFormProps } from "../models/Item";

const ItemForm = ({ onAddItem }: ItemFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredValue = inputRef.current!.value;
    const enteredAmount = +amountRef.current!.value;

    onAddItem(enteredValue, enteredAmount);

    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={inputRef} />
      <input type="number" ref={amountRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
