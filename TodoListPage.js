'use strict';

import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import ItemList from './ItemList';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

export default class TodoListPage extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [] // { checked: Bool, text: String }
    }
  }

  render() {
    return (
      <ItemList
        todoItems={this.state.todoItems}
        toggleChecked={this._toggleChecked}
        addTodoItem={this._addTodoItem} />
    );
  }

  _addTodoItem = (text) => {
    const newTodoItems = [...this.state.todoItems, { checked: false, text: text }]
    this.setState({ todoItems: newTodoItems })
  }

  _toggleChecked = (checked, index) => {
    this.setState(
      { todoItems: [
        ...this.state.todoItems.slice(0, index),
        Object.assign({}, this.state.todoItems[index], {
          checked: checked
        }),
        ...this.state.todoItems.slice(index + 1)
      ]}
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});
