export function getInventoryListItems() {
  const payload = [
    {quantity: '3lbs', description: "flour"},
    {quantity: "2 dozen", description: "eggs"},
    {quantity: '2lbs', description: "sugar"}
  ]
  return {type: 'GET_INVENTORY_LIST_ITEMS', payload: payload}
}

export function addInventoryListItem(quantity, description) {
  const payload = {quantity, description}
  return {type: 'ADD_INVENTORY_LIST_ITEM', payload: payload}
}