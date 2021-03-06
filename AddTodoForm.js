'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

export default class AddTodoForm extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.inputValue}
            placeholder='追加したいTodoListを入力'
            onChange={this._onInputTextChanged} />
          <Button
            onPress={this._onInputPressed}
            color='#48BBEC'
            title='Add'
          />
        </View>
      </View>
    );
  }

  _onInputTextChanged = (event) => {
    this.setState({ inputValue: event.nativeEvent.text });
  };

  _onInputPressed = () => {
    this.setState({ isLoading: true })
    this.setState({ inputValue: '' })
    this.props.addTodoItem(this.state.inputValue)
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});
