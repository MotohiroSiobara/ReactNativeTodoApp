'use strict';

import React, { Component } from 'react';
import CheckBox from 'react-native-check-box';
import AddTodoForm from './AddTodoForm';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  Button,
} from 'react-native';

export default class ItemList extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
    <ItemText
      item={item}
      index={index}
      toggleChecked={this.props.toggleChecked}
      onPressItem={this._onPressItem}
    />
  );

  render() {
    return (
      <View>
        <View style={styles.container}>
          <FlatList
            data={this.props.todoItems}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
        <AddTodoForm addTodoItem={this.props.addTodoItem} />
      </View>
    );
  }

  _onPressItem = (index) => {
  };
}

class ItemText extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;

    return (
      <View style={styles.rowContainer}>
        <CheckBox
          isChecked={item.checked}
          onClick={() => this.props.toggleChecked(!item.checked, this.props.index)} />
        <Text
          style={styles.title}
          numberOfLines={1}>
          {item.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 500
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});
