import React from 'react';

const InventoryList = props => {
  return(
    <div>
      <h3>Inventory</h3>
      <ul>
        {props.inventoryItems.map((item, i) => {
          return (<li key={i}>item: {item.description}, quantity: {item.quantity}</li>)
        })}
      </ul>
    </div>
  )
}

module.exports = InventoryList