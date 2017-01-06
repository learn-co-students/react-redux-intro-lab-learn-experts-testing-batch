import React from 'react';

const NewInventoryItem = (props) => {
  return <form>
    <label>Item Description:</label>
    <input type='text'/>
    <label>Item Quantity:</label>
    <input type="text"/>
    <input type="submit" value="create new item"/>
  </form>
}

export default NewInventoryItem;
