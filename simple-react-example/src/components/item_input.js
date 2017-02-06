import React, { Component } from 'react';

class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = { listItem: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.listItem}
          onChange={event => this.handleInputChange(event)} />
        <button onClick={() => this.handleButtonClick()}>Add Item</button>
      </div>
    );
  }

  handleButtonClick() {
    this.props.onAddItem(this.state.listItem);
    this.setState({listItem: ''});
  }

  handleInputChange(event) {
    this.setState({ listItem: event.target.value });
  }
}

export default ItemInput;
