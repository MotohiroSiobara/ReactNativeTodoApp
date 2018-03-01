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
        moveToAddForm={this._moveToAddForm} />
    );
  }

  _addTodoItem = (text) => {
    const newTodoItems = [...this.state.todoItems, { checked: false, text: text }]
    this.setState({ todoItems: newTodoItems })
    this.props.navigator.push({
      title: 'TODOリスト',
      component: ItemList,
      passProps: {todoItems: newTodoItems}
    });
  }

  _moveToAddForm = () => {
    this.props.navigator.push({
      title: 'TODOを追加する',
      component: AddTodoForm,
      passProps: {todoItems: this.state.todoItems, addTodoItem: this._addTodoItem}
    });
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});
