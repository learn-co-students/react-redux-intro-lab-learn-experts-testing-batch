import React from 'react';

const InventoryList = (props) => {
  return <ul>
    {props.inventoryItems.map((item, key) => {
      return <li key={key}>item: {item.description}, quantity: {item.quantity}</li>
    })}
  </ul>
}

export default InventoryList;
