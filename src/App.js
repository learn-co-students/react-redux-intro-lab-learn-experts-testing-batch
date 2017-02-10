import React, { Component } from 'react';
import NewInventoryItem from './NewInventoryItem'
import InventoryList from './InventoryList'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addInventoryListItem, getInventoryListItems }  from './actions/inventoryItemsActions';

class App extends Component {
  componentWillMount(){
    this.props.getInventoryListItems()
  }

  handleSubmit(quantity, description){
    this.props.addInventoryListItem(quantity, description)
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <NewInventoryItem handleSubmit={this.handleSubmit.bind(this)}/>
          <InventoryList inventoryItems={this.props.inventoryItems}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {inventoryItems: state.inventoryItems}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addInventoryListItem, getInventoryListItems}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
