export default function inventoryItemsReducer(state=[], action){
  switch(action.type){
    case "GET_INVENTORY_LIST_ITEMS":
      return action.payload.slice(); 
    case "ADD_INVENTORY_LIST_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
}