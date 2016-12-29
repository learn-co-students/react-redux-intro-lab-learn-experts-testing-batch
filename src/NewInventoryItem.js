import React from 'react';
import { addInventoryListItem } from './actions/inventoryItemsActions'

const NewInventoryItem = props => {
  
  return(
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Description</label>
        <input type='text' name="description" />
        
        <label>Quantity</label>
        <input type="text" name="quantity"/>
        
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

module.exports = NewInventoryItem