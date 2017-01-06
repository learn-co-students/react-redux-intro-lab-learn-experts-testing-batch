import React, { Component } from 'react';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';
import {connect} from 'react-redux';
import * as actions from './actions/inventoryItemsActions';

class App extends Component {

  constructor(props){
    super(props);

    this.state = props.store.getState();
  }

  componentWillMount(){
    const {store} = this.props;

    store.dispatch(actions.getInventoryListItems());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList />
          <NewInventoryItem />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {inventoryListItems: state.inventoryListItems}
}

const connector = connect(mapStateToProps);
const connectedComponent = connector(App);

export default connectedComponent;
