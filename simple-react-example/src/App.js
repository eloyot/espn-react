import React, { Component } from 'react';
import './App.css';
import ItemInput from './components/item_input';
import ItemList from './components/item_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
  }

  handleAddItem(item) {
    let items = Array.from(this.state.items);
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div>
        <h2>Item List Application</h2>
        <ItemInput onAddItem={item => this.handleAddItem(item)} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
