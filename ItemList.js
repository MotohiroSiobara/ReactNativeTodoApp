'use strict';

import React, { Component } from 'react';
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
      onPressItem={this._onPressItem}
    />
  );

  render() {
    return (
      <FlatList
        ListHeaderComponent={<Button title='新しいTODOを追加する' onPress={this.props.moveToAddForm} />}
        data={this.props.todoItems}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

  _onPressItem = (index) => {
    console.log("Pressed row: " +index);
  };
}

class ItemText extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;

    return (
      <Text style={styles.title}
                numberOfLines={1}>{item.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
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
