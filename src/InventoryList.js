import React from 'react';

const InventoryList = (props) => {
    return (
      <ul>
        {props.inventoryItems.map(item =>
          <li>
            item: {item.description}, quantity: {item.quantity}
          </li>
        )}
      </ul>
    )
}

export default InventoryList;
