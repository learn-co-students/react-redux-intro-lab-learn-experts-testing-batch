import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'
import { addInventoryListItem } from './actions/inventoryItemsActions'

class App extends Component {
  constructor(props){
    super(props)
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event){
    
    event.preventDefault()
    const target = event.target
    const description = target.children[1].value
    const quantity = target.children[3].value
    this.props.addInventoryListItem(quantity, description)
    // store.dispatch(addInventoryListItem(description, quantity))
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.inventory} />
          <NewInventoryItem onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {inventory: state.inventory}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addInventoryListItem }, dispatch);
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
const connectedComponent = connector(App)

export default connectedComponent;