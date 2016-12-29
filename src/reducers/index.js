import { combineReducers } from 'redux';
import inventoryItemsReducer from './inventoryItemsReducer';

const rootReducer = combineReducers({
  inventory: inventoryItemsReducer
})

export default rootReducer