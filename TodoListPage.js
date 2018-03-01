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
      todoItems: [{checked: false, text: "テスト"}] // { checked: Bool, text: String }
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodoForm />
        <ItemList todoItems={this.state.todoItems} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});
