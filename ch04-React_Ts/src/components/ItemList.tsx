import React from "react";
import { Item } from "../models/Item";

interface ItemProps {
  items: Item[];
}

const ItemList = ({ items }: ItemProps): JSX.Element => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.title} - {item.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
