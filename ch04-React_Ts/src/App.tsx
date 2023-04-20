import React, { useState } from "react";
import Greeter from "./components/Greeter";
import ItemList from "./components/ItemList";
import { Item, ItemClass } from "./models/Item";
import ItemForm from "./components/ItemForm";

const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItemHandler = (item: string, amount: number) => {
    const newItem = new ItemClass(item, amount);

    setItems((prevItem) => {
      return [...prevItem, newItem];
    });
  };

  // const items = [
  //   { id: 1, title: "item 01", amount: 1 },
  //   { id: 2, title: "item 02", amount: 5 },
  // ];

  return (
    <>
      <ItemForm onAddItem={addItemHandler} />
      <ItemList items={items} />
    </>
  );
};

export default App;
