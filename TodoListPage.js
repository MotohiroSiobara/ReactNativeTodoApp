'use strict';

import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import ItemList from './ItemList';
import {
  StyleSheet,
  View,
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
      <View style={styles.container}>
        <AddTodoForm addTodoItem={this._addTodoItem} />
        <ItemList  />
      </View>
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
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});
