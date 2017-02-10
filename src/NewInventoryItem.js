import React from 'react';

class NewInventoryItem extends React.Component {
  constructor(){
    super()
    this.state = {quantity: '', description: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleSubmit(this.state.quantity, this.state.description)
    this.setState({
      quantity: '',
      description: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Quantity:</label>
        <input id="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        <label>Description:</label>
        <input id="description" value={this.state.description} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    )
  }
}

module.exports = NewInventoryItem;
